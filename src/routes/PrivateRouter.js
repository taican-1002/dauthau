import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../modules/Home/index";

const PrivateRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* <Route path="/degree" element={<Home />} />
        <Route path="/certificate" element={<Home />} />
        <Route path="/finance" element={<Home />} />
        <Route path="/asset" element={<Home />} /> */}
      </Routes>
    </>
  );
};

export default PrivateRouter;
