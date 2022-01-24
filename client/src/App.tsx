import { FC } from "react";
import { useQuery, gql } from "@apollo/client";


const GET_ALL_USERS = gql`
  query {
    getAllUsers {
      name, username, email
    }
  }
`;

export const App: FC = () => {

  const {error, data, loading} = useQuery(GET_ALL_USERS);

  console.log(data.getAllUsers);

  return <div className="App"></div>;
};
