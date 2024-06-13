**Node.js GraphQL Project**

This repository contains a Node.js application with GraphQL API setup using Apollo Server, structured with **clean architecture principles.**

**Project Structure**

The project follows a modular structure with separation of concerns, adhering to clean architecture principles.

```
├── src
│ ├── app
│ │ └── server.js # Entry point for the Node.js server
│ ├── domain
│ │ ├── entities # Domain entities (e.g., User.js)
│ │ ├── repositories # Repository interfaces and implementations (e.g., UserRepository.js)
│ │ └── usecases # Use cases or business logic (e.g., CreateUser.js)
│ ├── infrastructure
│ │ ├── db
│ │ │ ├── models # Database models (e.g., UserModel.js)
│ │ │ └── SequelizeUserRepository.js # Repository implementation using Sequelize
│ │ ├── email # Email service (e.g., EmailService.js)
│ │ └── sms # SMS service (e.g., SmsService.js)
│ └── interfaces
│ └── graphql
│ ├── resolvers.js # GraphQL resolvers
│ ├── typeDefs.js # GraphQL schema definitions
│ ├── index.js # GraphQL server setup
│ └── validators # Input validation using Joi (e.g., userValidation.js)
├── package.json
└── nodemon.json
```

Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

**Prerequisites**

```
1. Node.js (version >= 12.0.0)
2. npm or yarn
```

**Installing Dependencies**
Install project dependencies:

```
    npm install
    # or
    yarn install
```

**Running the Server**
Start the Node.js server with nodemon for automatic reloading:
**npx nodemon**

The server should now be running on `http://localhost:4000/`

**GraphQL Queries and Mutations**
Access the GraphQL Playground at `http://localhost:4000/graphql` to test queries and mutations.

Example Query

```json
query {
    getAllUsers {
        id
        name
        email
    }
}
```

Example Mutation

```json
mutation {
createUser(id: "1", name: "John Doe", email: "john.doe@example.com") {
        id
        name
        email
    }
}
```

**Built With**

1. Node.js
2. GraphQL
3. Apollo Server
4. Sequelize (for database interactions)
5. Joi (for input validation)

**Authors**
Vishal

**Acknowledgments**

```
> Hat tip to anyone whose code was used
> Inspiration
> etc.
```
