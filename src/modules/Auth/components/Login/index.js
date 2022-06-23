import vtco from "../../../assets/images/vtco.png";

import React from "react";
import { Container, Grid, TextField, Button } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/degree");
    toast.success("Login thành công!");
  };
  return (
    <div className="login">
      <Container maxWidth="sm">
        <Grid container spacing={2} className="login-wrap">
          <div className="login-form-wrap">
            <div className="login-form">
              <img src={vtco} alt="logo" />
              <h1 className="login-title">Đăng nhập</h1>
              <h2 className="login-sub">
                Sử dụng tài khoản của bạn để đăng nhập
              </h2>
              <TextField
                placeholder="Tài khoản"
                variant="outlined"
                className="form-input"
                sx={{ input: { color: "#49454F" } }}
              />
              <TextField
                placeholder="Mật khẩu"
                variant="outlined"
                className="form-input"
                type="password"
                sx={{ input: { color: "#49454F" } }}
              />
              <div className="login-forgotpass">Quên tài khoản?</div>
              <div className="btn">
                <Button
                  variant="contained"
                  className="login-btn"
                  onClick={handleLogin}
                >
                  Đăng nhập
                </Button>
              </div>
            </div>
          </div>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
