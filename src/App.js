import React from "react";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./common/components/layout/MainLayout";
import { publicRoutes } from "./routes/index";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        // theme="colored"
      />
      <Box className="app">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;

            let Layout = route.layout || MainLayout;

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Box className="page__content">
                      <Page />
                    </Box>
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
