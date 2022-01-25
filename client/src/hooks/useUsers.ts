import { useQuery, gql } from "@apollo/client";

const GET_ALL_USERS = gql`
  query {
    getAllUsers {
      name
      username
      email
    }
  }
`;

export const useUsers = () => {
  const { error, data, loading } = useQuery(GET_ALL_USERS);

  return {
    error,
    data,
    loading,
  };
};
