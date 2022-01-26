import { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;
const Header = styled.h4`
  font-size: 25px;
`;
const Card = styled.div`
  width: 250px;
  height: 200px;
  borderbottom: 1px solid silver;
  margintop: 10px;
  padding: 5px;
`;
const Title = styled.h5``;
const Body = styled.p``;

interface IPosts {
  __typename: string;
  id: string;
  title: string;
  body: string;
}
interface IProps {
  posts: IPosts[];
}

export const PostList: FC<IProps> = ({ posts }) => {
  return (
    <>
      <Header>User Posts:</Header>
      <Wrapper>
        {posts?.map((post: any) => {
          return (
            <Card key={post.id}>
              <Title>{post.title}</Title>
              <Body>{post.body}</Body>
            </Card>
          );
        })}
      </Wrapper>
    </>
  );
};
