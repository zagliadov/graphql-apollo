import { ApolloServer, gql, ApolloError, ValidationError } from "apollo-server";
import axios from "axios";
const URI = `https://jsonplaceholder.typicode.com/users`;

interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
}

const resolvers = {
  Query: {
    async getAllUsers() {
      return await axios.get(URI)
        .then((response) => response.data)
        .then((data) => data);
    },
    async getUser(id: string) {
      return await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.data)
        .then(data => data);
    }
  },
  Mutation: {
    async createUser(parent: any, args: any) {
      const newUser = args;
      await axios.post(URI, newUser);
      return newUser;
    }
  }
};

const typeDefs = gql`
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

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
