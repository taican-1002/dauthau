import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../modules/Home/index";
import Degree from "../modules/Degree";
import Certificate from "../modules/Certificate";
import Finance from "../modules/Finance";
import Asset from "../modules/Asset";

const PrivateRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/degree" element={<Degree />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/asset" element={<Asset />} />
      </Routes>
    </>
  );
};

export default PrivateRouter;
