import { FC } from "react";
import { AddForm } from "../AddForm/AddForm";

interface IProps {
  open: boolean;
  setOpen: (arg0: boolean) => void;
}
export const Modal: FC<IProps> = ({ open, setOpen }) => {
  let type = open ? "flex" : "none";
  return (
    <div
      style={{
        display: type,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        left: 0,
        background: '#758794ec',
        width: "100vw",
        height: "100vh",
        border: "1px solid red",
      }}
    >
      <AddForm setOpen={setOpen}/>
    </div>
  );
};
