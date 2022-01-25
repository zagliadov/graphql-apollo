import axios from "axios";
const URI = `https://jsonplaceholder.typicode.com/users`;

interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
};

export const resolvers = {
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