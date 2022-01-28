import { FC, useState } from "react";
import styled from "styled-components";
import { gql, useMutation } from "@apollo/client";
import { useUser } from "../../hooks/useUser";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 40%;
  height: 210px;
`;
const InputText = styled.input`
  padding: 7px;
  font-size: 20px;
`;

const Title = styled.h4`
  font-size: 24px;
`;

const InputSubmit = styled.input`
  align-self: center;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 20px;
`;

interface IProps {
  setOpen: (arg0: boolean) => void;
  userId: any;
}

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

export const UpdateForm: FC<IProps> = ({ setOpen, userId }) => {
  const [name, setName] = useState<string>(""),
    [username, setUsername] = useState<string>(""),
    [email, setEmail] = useState<string>("");
  const [updateUser] = useMutation(UPDATE_USER);
  const { error, loading, data } = useUser(userId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(!userId) return 
    updateUser({
      variables: { id: userId, name: name, username: username, email: email },
    });
    setOpen(false);
  };

  if (error) return <Title>Error...</Title>;
  if (loading) return <Title>loading...</Title>;
  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <InputText type="text" onChange={(e) => setName(e.target.value)} />
      <InputText type="text" onChange={(e) => setUsername(e.target.value)} />
      <InputText type="text" onChange={(e) => setEmail(e.target.value)} />
      <InputSubmit type="submit" />
    </Form>
  );
};
