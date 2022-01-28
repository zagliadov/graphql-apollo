import { FC, useState } from "react";
import { AddForm } from "../AddForm/AddForm";
import { AllUserList } from "../AllUserList/AllUserList";
import { Modal } from "../Modal/Modal";
import { UpdateForm } from "../UpdateForm/UpdateForm";

export const Home: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [updateModal, setUpdateModal] = useState<boolean>(false);
  const [userId, setUserId] = useState<any>();

  return (
    <>
      <AllUserList setOpen={setOpen} setUserId={setUserId} />
      <Modal open={open}>
        <AddForm setOpen={setOpen} />
      </Modal>
      <Modal open={updateModal}>
        <UpdateForm setOpen={setUpdateModal} userId={userId} />
      </Modal>
    </>
  );
};
