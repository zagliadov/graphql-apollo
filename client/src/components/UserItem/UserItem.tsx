import { FC } from "react";
import { useParams } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { useUserPost } from "../../hooks/useUserPost";
import { PostList } from "../PostList/PostList";

export const UserItem: FC = () => {
  let { id } = useParams();
  const { data, loading, error } = useUser(id);
  const { data: posts } = useUserPost(id);

  return (
    <div>
      <h4>{data?.getUser.name}</h4>
      <hr />
      <div>
        <p>Username: {data?.getUser.username}</p>
        <p>Email: {data?.getUser.email}</p>
        <PostList posts={posts?.getUserPost}/>
      </div>
    </div>
  );
};
