import axios from "axios";
const URI = `https://jsonplaceholder.typicode.com/users/`;

interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
}

export const resolvers = {
  Query: {
    async getAllUsers() {
      return await axios
        .get(URI)
        .then((response) => response.data)
        .then((data) => data);
    },
    async getUser(parent: any, args: any) {
      return await axios
        .get(`${URI}${args.id}`)
        .then((response) => response.data)
        .then((data) => data);
    },
    async getUserPost(parent: any, args: any) {
      return await axios
        .get(`${URI}${args.id}/posts`)
        .then((response) => response.data)
        .then((data) => data);
    },
  },
  Mutation: {
    async createUser(parent: any, args: any) {
      await axios.post(URI, args);
      return args;
    },
    async deleteUser(parent: any, args: any) {
      await axios.delete(`${URI}${args.id}`);
      return args
    },
  },
};
