import { FC } from "react";
import { AddForm } from "../AddForm/AddForm";
import styled from "styled-components";

interface DisplayProps {
  type: string;
}
const Wrapper = styled.div<DisplayProps>`
  display: ${({ type }) => type};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background: #758794ec;
  width: 100vw;
  height: 100vh;
  border: 1px solid red;
`;

interface IProps {
  open: boolean;
}

export const Modal: FC<IProps> = ({ open, children }) => {
  let type = open ? "flex" : "none";
  return <Wrapper type={type}>{children}</Wrapper>;
};
