import { FC } from "react";
import { useUsers } from "../../hooks/useUsers";

export const AllUserList: FC = () => {
  
  const { error, loading, data } = useUsers();
  console.log(data.getAllUsers);

  return (
    <div>
      {data?.getAllUsers.map((user: any) => {
        return <p key={user.id}>{user.name}</p>;
      })}
    </div>
  );
};
