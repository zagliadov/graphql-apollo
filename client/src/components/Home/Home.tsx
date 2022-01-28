import { FC, useState } from "react";
import { AllUserList } from "../AllUserList/AllUserList";
import { Modal } from "../Modal/Modal";

export const Home: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <AllUserList setOpen={setOpen} />
      <Modal open={open} setOpen={setOpen} />
    </>
  );
};
