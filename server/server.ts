import { ApolloServer, gql } from 'apollo-server';

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];
const authors = [
  {
    name: 'Kate Chopin',
    books: {
      title: 'The Awakening',
      author: 'Kate Chopin',
    }
  },
  {
    name: 'Paul Auster',
    books: {
      title: 'City of Glass',
      author: 'Paul Auster',
    }
  }
]

const resolvers = {
  Query: {
    books: () => books,
    authors: () => authors,
  },

};

const typeDefs = gql`

  type Book {
    title: String
    author: Author
  }

  type Author {
    name: String
    books: [Book]
  }

  type Query {
    books: [Book]
    authors: [Author]
  }

  type Mutation {
  addBook(title: String, author: String): Book
}
`;




const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});