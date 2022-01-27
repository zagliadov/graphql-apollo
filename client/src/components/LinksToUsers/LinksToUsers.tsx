import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MyLink = styled(Link)`
  text-decoration: none;
  color: #2AA29F;
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

export const LinksToUsers: FC<IProps> = ({ users }) => {
  return (
    <>
      {users.map((user: any) => {
        return (
          <MyLink key={user.id} to={`/user/${user.id}`}>
            {user.name}
          </MyLink>
        );
      })}
    </>
  );
};
