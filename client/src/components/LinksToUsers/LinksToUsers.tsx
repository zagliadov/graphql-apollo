import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import styled from "styled-components";

const MyLink = styled(Link)`
  text-decoration: none;
  color: #2aa29f;
  font-size: 20px;
  padding-left: 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid silver;
`;

interface IUser {
  __typename: string;
  id: string;
  name: string;
  username: string;
  email: string;
}
interface IProps {
  users: IUser[];
}
const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
    }
  }
`;

export const LinksToUsers: FC<IProps> = ({ users }) => {
  const [deleteUser] = useMutation(DELETE_USER);

  return (
    <>
      {users.map((user: any) => {
        return (
          <>
            <MyLink key={user.id} to={`/user/${user.id}`}>
              {user.name}
            </MyLink>
            <button onClick={() => deleteUser({ variables: { id: user.id } })}>
              x
            </button>
          </>
        );
      })}
    </>
  );
};
