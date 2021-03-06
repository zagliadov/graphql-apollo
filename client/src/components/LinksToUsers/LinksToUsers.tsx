import { FC } from "react";
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
  setUserId: any;
  setOpen: (arg0: boolean) => void;
}
const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
    }
  }
`;

export const LinksToUsers: FC<IProps> = ({ users, setOpen, setUserId }) => {
  const [deleteUser] = useMutation(DELETE_USER);

  return (
    <>
      {users?.map((user: any) => {
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
                onClick={() => {
                  setOpen(true);
                  setUserId(user.id);
                }}
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
