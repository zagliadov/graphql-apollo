import { FC, useState } from "react";
import { useCreateUser } from "../../hooks/useCreateUser";

interface IProps {
  setOpen: (arg0: boolean) => void;
}
export const AddForm: FC<IProps> = ({ setOpen }) => {
  const inputStyle = { padding: "7px", fontSize: "20px" };
  const [name, setName] = useState<string>(""),
    [username, setUsername] = useState<string>(""),
    [email, setEmail] = useState<string>("");

  const [newUser, setNewUser] = useState<any>("");

  // const { data } = useCreateUser(newUser);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpen(false);
    setNewUser({ name, username, email });
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        width: "40%",
        height: "210px",
      }}
    >
      <input
        type="text"
        style={inputStyle}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        style={inputStyle}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        style={inputStyle}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="submit"
        style={{
          alignSelf: "center",
          paddingLeft: "10px",
          paddingRight: "10px",
          fontSize: "20px",
        }}
      />
    </form>
  );
};
