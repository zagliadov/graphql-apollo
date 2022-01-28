import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid silver;
  padding: 5px;
`;
const ButtonWrapper = styled.div`
  display: flex;
`;
const MyLink = styled(Link)`
  text-decoration: none;
  color: #2aa29f;
  font-size: 20px;
  padding-left: 10px;
  padding-bottom: 5px;
`;

const UpdateButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 20px;
  cursor: pointer;
  padding-right: 15px;
  color: silver;
`;

const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 20px;
  padding-right: 15px;
  cursor: pointer;
  color: silver;
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

const UPDATE_USER = gql`
  mutation UpdateUser(
    $name: String!
    $username: String!
    $email: String!
    $updateUserId: ID!
  ) {
    updateUser(
      name: $name
      username: $username
      email: $email
      id: $updateUserId
    ) {
      name
      username
    }
  }
`;

export const LinksToUsers: FC<IProps> = ({ users }) => {
  const [deleteUser] = useMutation(DELETE_USER);
  const [updateUser] = useMutation(UPDATE_USER);

  return (
    <>
      {users.map((user: any) => {
        return (
          <Wrapper key={user.id}>
            <MyLink to={`/user/${user.id}`}>{user.name}</MyLink>
            <ButtonWrapper>
              <RemoveButton
                onClick={() => deleteUser({ variables: { id: user.id } })}
              >
                x
              </RemoveButton>
              <UpdateButton
                onClick={() => updateUser({ variables: { id: user.id } })}
              >
                +
              </UpdateButton>
            </ButtonWrapper>
          </Wrapper>
        );
      })}
    </>
  );
};
