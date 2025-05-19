import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Box,
  Link,
  Container,
  Snackbar,
  Alert,
  IconButton,
  InputAdornment,
  Grid,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import EmailIcon from "@mui/icons-material/Email";
import api from "../api";

 function LoginForm() {
  const navigate = useNavigate();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
     if (!email || !password) {
      setSnackbarMessage("Please fill in all required fields.");
      setSnackbarSeverity("warning");
      setSnackbarOpen(true);
      return;
    }

    const user = { email, password };

    try {
   const response = await api.login(user);
      setSnackbarMessage("Login successful!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);

      // Optionally, save the token or user info
      localStorage.setItem("authToken", response.data.token);

      setTimeout(() => {
        navigate("/profile"); // Adjust the path to your dashboard or landing page
      }, 2000);
    } catch (error) {
      console.error("Error during login:", error);
      setSnackbarMessage("Failed to log in. Try again later.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Grid
      container
      sx={{
        minHeight: "100vh",
        backgroundColor: "#1976d2",
        color: "white",
        padding: { xs: 2, md: 4 },
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Left Section */}
      <Grid
        item
        xs={12}
        md={5}
        sx={{
          textAlign: { xs: "center", md: "left" },
          mb: { xs: 4, md: 0 },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2.5rem", md: "4rem" },
            fontWeight: "bold",
          }}
        >
          Forms
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mt: 2,
            fontSize: { xs: "1.2rem", md: "1.5rem" },
          }}
        >
          Registration and filling forms with various fields
        </Typography>
      </Grid>

      {/* Form Section */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          textAlign: "center",
          transform: { xs: "none", md: "rotate(-10deg)" },
        }}
      >
        <Container
          component="main"
          maxWidth="xs"
          sx={{
            bgcolor: "white",
            borderRadius: 4,
            p: 4,
            boxShadow: 4,
            textAlign: "center",
          }}
        >
          <Box component="form" noValidate onSubmit={handleLogin} sx={{ mt: 2 }}>
            <div style={{ marginBottom: "20px" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 1,
                  color: "#1976d2",
                }}
              >
                <EmailIcon style={{ marginRight: "8px" }} />
                Email
              </Box>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                placeholder="example@gmail.com"
                name="email"
                autoComplete="email"
                 value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ bgcolor: "white", borderRadius: 2 }}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 1,
                  color: "#1976d2",
                }}
              >
                <VpnKeyIcon style={{ marginRight: "8px" }} />
                Password
              </Box>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                placeholder="********"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword((prev) => !prev)}
                        edge="end"
                        aria-label="toggle password visibility"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ bgcolor: "white", borderRadius: 2 }}
              />
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: "red",
                color: "white",
                borderRadius: 2,
                textTransform: "capitalize",
              }}
            >
              Log In
            </Button>
            <Typography variant="body2" align="center" color="black" gutterBottom>
              Or
            </Typography>
            <Typography variant="body2" align="center" color="black">
              Don’t have an account?{" "}
              <Link
                component="button"
                onClick={() => navigate("/signup")}
                sx={{ color: "blue" }}
              >
                Sign Up
              </Link>
            </Typography>
          </Box>
        </Container>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Grid>
  );
}
export default LoginForm;
