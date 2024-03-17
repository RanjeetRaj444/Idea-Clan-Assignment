module.exports = function Homepage() {
	return `<body>
    <h1>Social Media API</h1>
    <p> URL: <a href="https://idea-clan-assignment-atca.onrender.com/graphql">https://idea-clan-assignment-atca.onrender.com/graphql</a></p>
    <h2>Overview</h2>
  
    <p>The Social Media API is a Node.js application developed to simulate basic functionalities of a social media platform. It allows users to register, authenticate, create posts, and retrieve user posts. The API utilizes Express.js for server setup, GraphQL for querying data, and follows an object-oriented approach for data modeling.</p>
  
    <h3>Use this template for service</h3>
  
    <p>Send a POST request to query this endpoint:</p>
  
    <pre><code>$ curl --request POST <br/>
     --header 'content-type: application/json'<br/>
     --url 'https://idea-clan-assignment-atca.onrender.com/graphql' <br/>
     --data '{"query":"query { __typename }"}'
    </code></pre>
  
    
  
    <h4>Features</h4>
  
    <ul>
      <li>User Registration and Authentication</li>
      <li>Posting Content</li>
      <li>Retrieving Posts</li>
      <li>GraphQL Integration</li>
      <li>Object-Oriented Design</li>
    </ul>
  
    <h3>To use in your local system</h3>
  
    <h4>Requirements</h4>
  
    <ul>
      <li>Node.js</li>
      <li>npm (Node Package Manager)</li>
    </ul>
  
    <h4>Installation</h4>
  
    <p>Clone this repository to your local machine:</p>
  
    <pre><code>git clone &lt;"repository-url"&gt;
    </code></pre>
  
    <p>Navigate to the project directory:</p>
  
    <pre><code>cd social-media-api
    </code></pre>
  
    <p>Install dependencies:</p>
  
    <pre><code>npm install
    </code></pre>
  
    <h3>Usage</h3>
  
    <p>Start the server:</p>
  
    <pre><code>npm start
    </code></pre>
  
    <p>Access the GraphQL Playground at <a href="http://localhost:3000/graphql">http://localhost:3000/graphql</a> in your web browser.</p>
  
    <p>Use the provided queries and mutations to interact with the API.</p>
  
    <h4>Queries and Mutations</h4>
  
    <ul>
      <li>Register a User:</li>
      <pre><code>mutation {
    registerUser(username: "exampleUser", email: "user@example.com", password: "password") {
      id
      username
      email
    }
    }</code></pre>
      <li>Login a User:</li>
      <pre><code>mutation {
    loginUser(email: "user@example.com", password: "password") {
      id
      username
      email
      token
    }
    }</code></pre>
      <li>Create a Post:</li>
      <pre><code>mutation {
    createPost(userId: "&lt;USER_ID&gt;", content: "This is a new post.") {
      id
      userId
      content
     }
    }</code></pre>
      <li>Retrieve a User:</li>
      <pre><code>query {
    getUser(id:"&lt;USER_ID&gt;"){
      id,
      username,
      email,
      }
      }</code></pre>
      <li>Retrieve a Post:</li>
      <pre><code>query {
    getPost(id: "&lt;POST_ID&gt;") {
    id
    userId
    content
      }
      }</code></pre>
      <li>Retrieve User's Posts:</li>
      <pre><code>query {
    getUserPosts(username: "&lt;USER_ID&gt;"){
      id,
      userId
      content
      }
    }</code></pre>
    </ul>
  
    <h4>Tech Stack Used</h4>
  
    <ul>
      <li>Node.js</li>
      <li>Express.js for server setup and middleware</li>
      <li>GraphQL for API development</li>
      <li>Apollo Server for handling GraphQL requests</li>
      <li>MongoDB for database management system</li>
      <li>Mongoose ODM to interact with the MongoDB database</li>
    </ul>
  </body> `;
};
