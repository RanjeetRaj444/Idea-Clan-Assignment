// mongodb+srv://ranjeetraj44666:idea-clan@cluster0.v9e4rdx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const bcrypt = require("bcrypt");

async function startServer() {
	// Initialize Express app
	const app = express();
	app.use(express.json());

	// Sample data structures to simulate database
	let users = [
		{ id: 1, username: "Radha", email: "radha@gmail.com", password: "hello" },
	];
	let posts = [];

	// GraphQL schema
	const typeDefs = gql`
		type User {
			id: ID!
			username: String!
			email: String!
		}

		type Post {
			id: ID!
			userId: ID!
			content: String!
		}

		type Query {
			getUser(id: ID!): User
			getPost(id: ID!): Post
			getUserPosts(userId: ID!): [Post]
		}

		type Mutation {
			registerUser(username: String!, email: String!, password: String!): User
			loginUser(email: String!, password: String!): User
			createPost(userId: ID!, content: String!): Post
		}
	`;

	// Object-oriented approach for User
	class User {
		constructor(id, username, email, password) {
			this.id = id;
			this.username = username;
			this.email = email;
			this.password = password;
		}
	}

	// Object-oriented approach for Post
	class Post {
		constructor(id, userId, content) {
			this.id = id;
			this.userId = userId;
			this.content = content;
		}
	}

	// Resolvers
	const resolvers = {
		Query: {
			getUser: ({ id }) => users.find((user) => user.id === id),
			getPost: ({ id }) => posts.find((post) => post.id === id),
			getUserPosts: ({ userId }) =>
				posts.filter((post) => post.userId === userId),
		},
		Mutation: {
			registerUser: ({ username, email, password }) => {
				const id = Date.now().toString(); // Generate unique ID
				const hashedPassword = bcrypt.hashSync(password, 10); // Hash password
				const user = new User(id, username, email, hashedPassword);
				users.push(user);
				return user;
			},
			loginUser: ({ email, password }) => {
				const user = users.find((user) => user.email === email);
				if (!user) return null; // User not found

				if (bcrypt.compareSync(password, user.password)) {
					return user; // Successful login
				} else {
					return null; // Incorrect password
				}
			},
			createPost: ({ userId, content }) => {
				const id = Date.now().toString(); // Generate unique ID
				const post = new Post(id, userId, content);
				posts.push(post);
				return post;
			},
		},
	};

	// Apollo Server
	const server = new ApolloServer({ typeDefs, resolvers });
	await server.start();
	server.applyMiddleware({ app });

	// Start server
	const PORT = process.env.PORT || 3000;
	app.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}`);
	});
}

startServer();
