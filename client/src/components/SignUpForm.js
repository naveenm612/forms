import React from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Box, Link, Container, Paper, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function SignUpForm() {
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    navigate("/"); 
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
        <Box display="flex" alignItems="center" mb={2}>
          <IconButton onClick={() => navigate("/")} sx={{ color: "text.secondary" }}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="body2" color="text.secondary" sx={{ marginLeft: 1 }}>
            Back
          </Typography>
        </Box>
        <Typography component="h2" variant="h5" align="center" gutterBottom>
          Create Your Account
        </Typography>
        <Typography variant="body2" align="center" color="textSecondary" gutterBottom>
          Already have an account?{" "}
          <Link component="button" onClick={() => navigate("/")} color="primary">
            Log in
          </Link>
        </Typography>
        <Box component="form" noValidate sx={{ mt: 2 }} onSubmit={handleSignUp}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="new-password"
          />
          <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2 }}>
            Sign Up
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
