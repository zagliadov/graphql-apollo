import { gql } from "apollo-server";

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    email: String!
  }
  type Posts {
    id: ID!
    userId: String!
    title: String!
    body: String!
  }
  type Query {
    getAllUsers: [User!]!
    getUser(id: ID!): User!
    getUserPost(id: ID!): [Posts]!
  }
  type Mutation {
    createUser(name: String!, username: String!, email: String!): User!
    deleteUser(id: ID!): User
  }
`;
