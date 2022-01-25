import { gql, useQuery } from "@apollo/client";

const USER_CREATE = gql`
  query CreateUser($name: String!, $username: String!, $email: String) {
    createUser(name: $name, username: $username, email: $email) {
      id
      name
      username
      email
    }
  }
`;

export const useCreateUser = (newUser: any) => {
  const { data, error, loading } = useQuery(USER_CREATE, {
    variables: {
      newUser
    },
  });
  return {
    data,
    error,
    loading,
  };
};
