import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home";
import { UserItem } from "../UserItem/UserItem";
import styled from "styled-components";

const Wrapper = styled.div`


`;

export const App: FC = () => {

  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserItem /> } />
      </Routes>
    </Wrapper>
  );
};
