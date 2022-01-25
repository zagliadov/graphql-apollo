import { gql, useQuery } from "@apollo/client";

const GET_USER_POST = gql`
  query GetUserPost($getUserPostId: ID!) {
    getUserPost(id: $getUserPostId) {
      title
    }
  }
`;

export const useUserPost = (id: any) => {
  const { data: posts, error, loading } = useQuery(GET_USER_POST, {
    variables: {
      id,
    },
  });
  return {
    posts,
    error,
    loading,
  };
};
