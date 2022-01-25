import { FC } from "react";
import { useUser } from "../../hooks/useUser";

export const UserItem: FC = () => {
  const { data, loading, error } = useUser(4);

  console.log(data && data);


  return <div></div>;
};
