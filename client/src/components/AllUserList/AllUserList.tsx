import { FC } from "react";
import { useUsers } from "../../hooks/useUsers";
import { Link } from "react-router-dom";

export const AllUserList: FC = () => {
  const { error, loading, data } = useUsers();
  console.log(data?.getAllUsers);

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      {data?.getAllUsers.map((user: any) => {
        return (
          <Link to={`/user/${user.id}`} key={user.id}>
            {user.name}
          </Link>
        );
      })}
    </div>
  );
};
