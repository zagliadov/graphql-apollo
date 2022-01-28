import { FC, useState } from "react";
import { AddForm } from "../AddForm/AddForm";
import { AllUserList } from "../AllUserList/AllUserList";
import { Modal } from "../Modal/Modal";

export const Home: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <AllUserList setOpen={setOpen} />
      {/* <Modal open={open} setOpen={setOpen} /> */}
      <Modal open={open} >
        <AddForm setOpen={setOpen} />
      </Modal>
    </>
  );
};
