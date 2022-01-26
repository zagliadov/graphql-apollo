import { gql, useQuery } from "@apollo/client";

const GET_USER_POST = gql`
  query GetUserPost($id: ID!) {
    getUserPost(id: $id) {
      id,
      title,
      body
    }
  }
`;

export const useUserPost = (id: any) => {
  const { data, error, loading } = useQuery(GET_USER_POST, {
    variables: {
      id,
    },
  });
  return {
    data,
    error,
    loading,
  };
};
