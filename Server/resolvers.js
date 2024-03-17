const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./models/user");
const Post = require("./models/post");

const resolvers = {
	Query: {
		getUser: async (_, { id }) => await User.findById(id),
		getPost: async (_, { id }) => await Post.findById(id),
		getUserPosts: async (_, { userId }) => await Post.find({ userId }),
	},
	Mutation: {
		registerUser: async (_, { username, email, password }) => {
			const hashedPassword = await bcrypt.hash(password, 10);
			const user = new User({ username, email, password: hashedPassword });
			await user.save();
			return user;
		},
		loginUser: async (_, { email, password }) => {
			const user = await User.findOne({ email });
			if (!user) throw new Error("User not found");
			const isValidPassword = await bcrypt.compare(password, user.password);
			if (!isValidPassword) throw new Error("Invalid password");
			const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
				expiresIn: "1h",
			});
			return { ...user._doc, id: user.id, token };
		},
		createPost: async (_, { userId, content }) => {
			const post = new Post({ userId, content });
			await post.save();
			return post;
		},
	},
};

module.exports = resolvers;
