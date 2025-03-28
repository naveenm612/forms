import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Box,
  Link,
  Container,
  Paper,
  IconButton,
  Snackbar,
  Alert,
  InputAdornment,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import emailIcon from '../Assests/email.svg';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import PersonIcon from '@mui/icons-material/Person';

export default function SignUpForm() {
  const navigate = useNavigate();
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "info" });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignUp = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const password = data.get("password");
    const confirmPassword = data.get("confirmPassword");

    if (password !== confirmPassword) {
      setSnackbar({ open: true, message: "Passwords do not match", severity: "error" });
      return;
    }

    const user = {
      name: data.get("name"),
      email: data.get("email"),
      password,
    };

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const result = await response.json();
      if (response.ok) {
        setSnackbar({ open: true, message: "User signed up successfully!", severity: "success" });
        // setTimeout(() => navigate("/"), 2000);
        setTimeout(() => navigate("/profile"), 2000); // Delay navigation for user feedback
      } else {
        setSnackbar({ open: true, message: result.message, severity: "error" });
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setSnackbar({ open: true, message: "Failed to sign up. Try again later.", severity: "error" });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  // return (
  //   <Container
  //     component="main"
  //     maxWidth="xs"
  //     sx={{
  //       display: "flex",
  //       alignItems: "center",
  //       justifyContent: "center",
  //       minHeight: "100vh",
  //       bgcolor: "background.default",
  //     }}
  //   >
  //     <Paper elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
  //       <Box display="flex" alignItems="center" mb={2}>
  //         <IconButton onClick={() => navigate("/")} sx={{ color: "text.secondary" }}>
  //           <ArrowBackIcon />
  //         </IconButton>
  //         <Typography variant="body2" color="text.secondary" sx={{ marginLeft: 1 }}>
  //           Back
  //         </Typography>
  //       </Box>
  //       <Typography component="h2" variant="h5" align="center" gutterBottom>
  //         Create Your Account
  //       </Typography>
  //       <Typography variant="body2" align="center" color="textSecondary" gutterBottom>
  //         Already have an account?{" "}
  //         <Link component="button" onClick={() => navigate("/")} color="primary">
  //           Log in
  //         </Link>
  //       </Typography>
  //       <Box component="form" noValidate sx={{ mt: 2 }} onSubmit={handleSignUp}>
  //         <TextField
  //           margin="normal"
  //           required
  //           fullWidth
  //           id="name"
  //           label="Name"
  //           name="name"
  //           autoComplete="name"
  //           autoFocus
  //         />
  //         <TextField
  //           margin="normal"
  //           required
  //           fullWidth
  //           id="email"
  //           label="Email"
  //           name="email"
  //           autoComplete="email"
  //         />
  //         <TextField
  //           margin="normal"
  //           required
  //           fullWidth
  //           name="password"
  //           label="Password"
  //           type={showPassword ? "text" : "password"}
  //           id="password"
  //           autoComplete="new-password"
  //           InputProps={{
  //             endAdornment: (
  //               <InputAdornment position="end">
  //                 <IconButton
  //                   onClick={() => setShowPassword((prev) => !prev)}
  //                   edge="end"
  //                   aria-label="toggle password visibility"
  //                 >
  //                   {showPassword ? <VisibilityOff /> : <Visibility />}
  //                 </IconButton>
  //               </InputAdornment>
  //             ),
  //           }}
  //         />
  //         <TextField
  //           margin="normal"
  //           required
  //           fullWidth
  //           name="confirmPassword"
  //           label="Confirm Password"
  //           type={showConfirmPassword ? "text" : "password"}
  //           id="confirmPassword"
  //           autoComplete="new-password"
  //           InputProps={{
  //             endAdornment: (
  //               <InputAdornment position="end">
  //                 <IconButton
  //                   onClick={() => setShowConfirmPassword((prev) => !prev)}
  //                   edge="end"
  //                   aria-label="toggle confirm password visibility"
  //                 >
  //                   {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
  //                 </IconButton>
  //               </InputAdornment>
  //             ),
  //           }}
  //         />
  //         <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2 }}>
  //           Sign Up
  //         </Button>
  //       </Box>
  //     </Paper>
  //     <Snackbar open={snackbar.open} autoHideDuration={4000} onClose={handleCloseSnackbar}  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}>
  //       <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: "100%" }}>
  //         {snackbar.message}
  //       </Alert>
  //     </Snackbar>
  //   </Container>
  // );

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        bgcolor: "black",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Shapes */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "100px",
          height: "100px",
          bgcolor: "blue",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "150px",
          height: "150px",
          bgcolor: "blue",
          // borderRadius: "50%",
          zIndex: 0,
        }}
      />

      <Container
        component="main"
        maxWidth="xs"
        sx={{
          zIndex: 1,
          bgcolor: "#1c1c1c",
          borderRadius: 4,
          p: 4,
          boxShadow: 4,
        }}
      >
        <Box display="flex" alignItems="center" >
          <IconButton onClick={() => navigate("/")} sx={{ color: "white" }}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="body2" color="white" sx={{ marginLeft: 1 }}>
            Back
          </Typography>
        </Box>
        <Typography component="h2" variant="h5" align="center" gutterBottom sx={{ color: "white" }}>
          Create Your Account
        </Typography>
        <Typography variant="body2" align="center" sx={{ color: "white" }} gutterBottom>
          Already have an account?{" "}
          <Link component="button" onClick={() => navigate("/")} sx={{ color: "blue" }}>
            Log in
          </Link>
        </Typography>
        <Box component="form" noValidate onSubmit={handleSignUp}>
          <div style={{ marginBottom: "10px" }}>
            <div style={{ marginTop: "10px" }}>
              <div
                style={{ display: "flex", position: "relative", top: "2px", color: "#ffffff" }}
              >
                <PersonIcon style={{ marginRight: "8px" }} />
                Name
              </div>
            </div>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              placeholder="Name"
              name="name"
              autoComplete="name"
              autoFocus
              sx={{ bgcolor: "white", borderRadius: 2 }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <div style={{ marginTop: "10px" }}>
              <div
                style={{ display: "flex", position: "relative", top: "2px", color: "#ffffff" }}
              >
                <img
                  src={emailIcon}
                  alt="email"
                  style={{ width: 24, height: 24, marginRight: "8px" }}
                />
                Email
              </div>
            </div>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              placeholder="Email"
              name="email"
              autoComplete="email"
              sx={{ bgcolor: "white", borderRadius: 2 }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <div style={{ marginTop: "10px" }}>
              <div
                style={{ display: "flex", position: "relative", top: "2px", color: "#ffffff" }}
              >
                <VpnKeyIcon style={{ marginRight: "8px" }} />
                Password
              </div>
            </div>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="new-password"
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
          <div style={{ marginBottom: "10px" }}>
            <div style={{ marginTop: "10px" }}>
              <div
                style={{ display: "flex", position: "relative", top: "2px", color: "#ffffff" }}
              >
                <VpnKeyIcon style={{ marginRight: "8px" }} />
                Confirm Password
              </div>
            </div>
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              placeholder="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              autoComplete="new-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                      edge="end"
                      aria-label="toggle confirm password visibility"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
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
            sx={{ mt: 3, mb: 2, bgcolor: "blue", color: "white", borderRadius: 2 }}
          >
            Sign Up
          </Button>
        </Box>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: "100%" }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );

}
