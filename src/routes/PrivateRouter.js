import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../modules/Home/index";

const PrivateRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

export default PrivateRouter;
