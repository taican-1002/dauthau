import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../modules/Home/index";
import Degree from "../modules/Home/Degree";
import Certificate from "../modules/Home/Certificate";
import Finance from "../modules/Home/Finance";
import Asset from "../modules/Home/Asset";

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
