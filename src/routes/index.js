import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../modules/Auth/pages/Login";
import PrivateRouter from "./PrivateRouter";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<PrivateRouter />} />

        <Route path="/" element={<Login />} exact />
      </Routes>
    </>
  );
};

export default Router;
