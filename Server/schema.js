
const { gql } = require("apollo-server-express");

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

module.exports = typeDefs;
