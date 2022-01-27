import { FC, useState } from "react";
import styled from "styled-components";
import { gql, useMutation } from "@apollo/client";

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
}
const USER_CREATE = gql`
  mutation CreateUser($name: String!, $username: String!, $email: String!) {
    createUser(name: $name, username: $username, email: $email) {
      name
      username
      email
    }
  }
`;
export const AddForm: FC<IProps> = ({ setOpen }) => {
  const [name, setName] = useState<string>(""),
    [username, setUsername] = useState<string>(""),
    [email, setEmail] = useState<string>("");

  const [newUser, setNewUser] = useState<any>("");

  const [createUser, { data, loading, error }] = useMutation(USER_CREATE, {
    variables: {
      name,
      username,
      email,
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewUser({ name, username, email });
    createUser(newUser);
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
