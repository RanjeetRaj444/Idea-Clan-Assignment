const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const {
	ApolloServerPluginDrainHttpServer,
} = require("@apollo/server/plugin/drainHttpServer");
const http = require("http");
const mongoose = require("mongoose");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const cors = require("cors");
require("dotenv").config();
async function startServer() {
	const app = express();
	const httpServer = http.createServer(app);
	app.use(express.json());
	app.use(cors());
	const server = new ApolloServer({
		typeDefs,
		resolvers,
		plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
		context: ({ req }) => {
			const token = req.headers.authorization || "";
			try {
				const user = jwt.verify(token, process.env.JWT_SECRET);
				return { user };
			} catch (error) {
				console.error("Error verifying token:", error);
				return {};
			}
		},
	});
	app.get("/", (req, res) => {
		res.send(
			"<h1>Server is running :--  to use service  please hit /graphql </h1>",
		);
	});
	await server.start();
	app.use("/graphql", cors(), express.json(), expressMiddleware(server));
	// server.applyMiddleware({ app });

	const PORT = process.env.PORT || 3000;

	mongoose
		.connect(process.env.MONGODB_URI)
		.then(() => {
			app.listen(PORT, () => {
				console.log(`Server listening at http://localhost:${PORT}`);
			});
		})
		.catch((error) => {
			console.error("Error connecting to MongoDB:", error);
		});
}
startServer();
