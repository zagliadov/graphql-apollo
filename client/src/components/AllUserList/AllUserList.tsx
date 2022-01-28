import { FC } from "react";
import { useUsers } from "../../hooks/useUsers";
import styled from "styled-components";
import { LinksToUsers } from "../LinksToUsers/LinksToUsers";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  paddingleft: 10px;
`;
const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 20px;
`;
const Title = styled.h4`
  font-size: 24px;
`;
const AddButton = styled.button`
  margin-left: auto;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 17px;
`;

interface IProps {
  setOpen(arg0: boolean): void;
  setUserId: any;
}

export const AllUserList: FC<IProps> = ({ setOpen, setUserId }) => {
  const { error, loading, data } = useUsers();

  if (error) return <Title>Error...</Title>;
  if (loading) return <Title>loading...</Title>;
  return (
    <Wrapper>
      <Header>
        <Title>All users from jsonplaceholder</Title>
        <AddButton onClick={() => setOpen(true)}>Add new user</AddButton>
      </Header>
      <LinksToUsers users={data?.getAllUsers} setOpen={setOpen} setUserId={setUserId} />
    </Wrapper>
  );
};
