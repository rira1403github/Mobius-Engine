import React, { useState } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/authContext";
import { doCreateUserWithEmailAndPassword } from "../../../firebase/auth";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const RegisterUser = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { userLoggedIn } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isRegistering) {
      setIsRegistering(true);
      await doCreateUserWithEmailAndPassword(email, password);
    }
  };

  return (
    <>
      {userLoggedIn && <Navigate to={"/home"} replace={true} />}
      <form onSubmit={onSubmit}>
        <TextField
          label="Company Email"
          variant="outlined"
          margin="normal"
          sx={{ width: 300 }}
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="PASSWORD"
          variant="outlined"
          margin="normal"
          sx={{ width: 300 }}
          type="password"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <TextField
          disabled={isRegistering}
          type="password"
          autoComplete='off'
          required
          value={confirmPassword} onChange={(e) => { setconfirmPassword(e.target.value) }}
        />
        <br />
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 2 }}
          color="secondary"
        >
          Sign Up
        </Button>
      </form>
    </>
  );
};

export default RegisterUser;
