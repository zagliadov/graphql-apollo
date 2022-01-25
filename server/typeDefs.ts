import {gql} from 'apollo-server';

export const typeDefs = gql`
  type User {
    id: String!
    name: String!
    username: String!
    email: String!
  }
  type Query {
    getAllUsers: [User!]!
    getUser(id: String!): User!
  }
  type Mutation {
    createUser(name: String!, username: String! email: String!): User!
  }
`;