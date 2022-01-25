import { gql, useQuery } from "@apollo/client";

const GET_USER = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      username
      email
    }
  }
`;

export const useUser = (id: any) => {

  const { data, error, loading } = useQuery(GET_USER, {
    variables: {
      id
    }
  });
  return {
    data, error, loading
  }
};
