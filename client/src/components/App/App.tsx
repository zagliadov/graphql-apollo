import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home";
import { UserItem } from "../UserItem/UserItem";

export const App: FC = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserItem /> } />
      </Routes>
    </div>
  );
};
