import { FC } from "react";

interface IPosts {
  __typename: string;
  id: string;
  title: string;
  body: string;
}
interface IProps {
  posts: IPosts[]
}
export const PostList: FC<IProps> = ({ posts }) => {
  return (
    <>
      <h4>User Posts:</h4>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {posts?.map((post: any) => {
          return (
            <div
              key={post.id}
              style={{
                width: "250px",
                height: "200px",
                borderBottom: "1px solid silver",
                marginTop: "10px",
                padding: "5px",
              }}
            >
              <h5>{post.title}</h5>
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
