import { FC } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { useUserPost } from "../../hooks/useUserPost";
import { PostList } from "../PostList/PostList";
import styled from "styled-components";

const Wrapper = styled.div``;
const Header = styled.h4`
  font-size: 24px;
`;
const Text = styled.p`

`;

export const UserItem: FC = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useUser(id);
  const { data: posts } = useUserPost(id);


  

  if(error) navigate('/')
  if(loading) return <Header>loading...</Header>
  return (
    <Wrapper>
      <Header>{data?.getUser.name}</Header>
      <hr />
        <Text>Username: {data?.getUser.username}</Text>
        <Text>Email: {data?.getUser.email}</Text>
        <PostList posts={posts?.getUserPost} />
    </Wrapper>
  );
};
