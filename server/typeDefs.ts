import {gql} from 'apollo-server';

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    email: String!
  }
  type Query {
    getAllUsers: [User!]!
    getUser(id: ID!): User!
  }
  type Mutation {
    createUser(name: String!, username: String! email: String!): User!
  }
`;