import React from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Box, Link, Container, Paper } from "@mui/material";

export default function LoginForm() {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    navigate("/profile");
  };
  

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      <Paper elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
        <Typography component="h2" variant="h5" align="center" gutterBottom>
          Login to Your Account
        </Typography>
        <Typography variant="body2" align="center" color="textSecondary" gutterBottom>
          Don’t have an account?{" "}
          <Link component="button" onClick={() => navigate("/signup")} color="primary">
            Sign up
          </Link>
        </Typography>
        <Box component="form" noValidate sx={{ mt: 2 }} onSubmit={handleLogin}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="emailOrPhone"
            label="Email or Phone"
            name="emailOrPhone"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2 }}>
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
