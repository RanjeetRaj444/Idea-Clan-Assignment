# Social Media API

## Overview

The Social Media API is a Node.js application developed to simulate basic functionalities of a social media platform. It allows users to register, authenticate, create posts, and retrieve user posts. The API utilizes Express.js for server setup, GraphQL for querying data, and follows an object-oriented approach for data modeling.

# Use this templete for service

Send a POST request to query this endpoint

$ curl --request POST \
 --header 'content-type: application/json' \
 --url 'https://idea-clan-assignment-atca.onrender.com/graphql' \
 --data '{"query":"query { \_\_typename }"}'

- After visiting to the Url:-- https://idea-clan-assignment-atca.onrender.com/graphql
  ![alt text](<Server/Screenshot (1630).png>)

## Features

- User Registration and Authentication
- Posting Content
- Retrieving Posts
- GraphQL Integration
- Object-Oriented Design

# To use in your local Stystem

## Requirements

- Node.js
- npm (Node Package Manager)

## Installation

- Clone this repository to your local machine:
  ```
  git clone <"repository-url">
  ```
- Navigate to the project directory:

  ```javascript
  cd social-media-api
  ```

- Install dependencies:
  ```javascript
  npm install
  ```

## Usage

- Start the server:
  ```javascript
  npm start
  ```
- Access the GraphQL Playground at http://localhost:3000/graphql in your web browser.
- Use the provided queries and mutations to interact with the API.

### Queries and Mutations

- Register a User:

  ```javascript
  mutation {
  registerUser(username: "exampleUser", email: "user@example.com", password: "password") {
    id
    username
    email
  }
  }
  ```

- Login a User:

  ```javascript
  mutation {
  loginUser(email: "user@example.com", password: "password") {
    id
    username
    email
    token
  }
  }
  ```

- Create a Post:
  ```javascript
  mutation {
  createPost(userId: "<USER_ID>", content: "This is a new post.") {
    id
    userId
    content
   }
  }
  ```
- Retrieve a User:
  ```javascript
  query {
  getUser(id:"<USER_ID>"){
    id,
    username,
    email,
    }
    }
  ```
- Retrieve a Post:
  ```javascript
  query {
  getPost(id: "<POST_ID>") {
  id
  userId
  content
    }
    }
  ```
- Retrieve User's Posts:
  ```javascript
  query {
  getUserPosts(username: "<USER_ID>"){
    id,
    userId
    content
    }
  }
  ```

### TechStack Used

- Node.js
- Express.js for server setup and middleware
- GraphQL for API development
- Apollo Server for handling GraphQL requests
- MongoDB for database management system
- Mongoose ODM to interact with the MongoDB database
