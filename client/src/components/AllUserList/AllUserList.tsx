import { FC } from "react";
import { useUsers } from "../../hooks/useUsers";
import { Link } from "react-router-dom";

interface IProps {
  setOpen(arg0: boolean): void;
}
export const AllUserList: FC<IProps> = ({ setOpen }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { error, loading, data } = useUsers();

  return (
    <div
      style={{ display: "flex", flexDirection: "column", paddingLeft: "10px" }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "0px 20px",
        }}
      >
        <h2>All users from jsonplaceholder</h2>
        <button
          onClick={() => setOpen(true)}
          style={{
            marginLeft: "auto",
            paddingLeft: "10px",
            paddingRight: "10px",
            fontSize: "17px",
          }}
        >
          Add new user
        </button>
      </header>

      {data?.getAllUsers.map((user: any) => {
        return (
          <div key={user.id}>
            <Link
              to={`/user/${user.id}`}
              style={{
                textDecoration: "none",
                fontSize: "20px",
                paddingLeft: "10px",
              }}
            >
              {user.name}
            </Link>
            <hr />
          </div>
        );
      })}
    </div>
  );
};
