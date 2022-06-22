import React from "react";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./common/components/layout/MainLayout";
import { publicRoutes } from "./routes/index";

function App() {
  return (
    <Router>
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
