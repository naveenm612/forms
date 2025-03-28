// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   TextField,
//   Button,
//   Typography,
//   Box,
//   Link,
//   Container,
//   Paper,
//   Snackbar,
//   Alert,
//   IconButton,
//   InputAdornment,
// } from "@mui/material";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";

// export default function LoginForm() {
//   const navigate = useNavigate();
//   const [snackbarOpen, setSnackbarOpen] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState("");
//   const [snackbarSeverity, setSnackbarSeverity] = useState("success"); // 'success' | 'error' | 'info' | 'warning'
//   const [showPassword, setShowPassword] = useState(false);

//   const handleLogin = async (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);

//     const user = {
//       email: data.get("emailOrPhone"),
//       password: data.get("password"),
//     };

//     try {
//       const response = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(user),
//       });

//       const result = await response.json();
//       if (response.ok) {
//         setSnackbarMessage("Login successful!");
//         setSnackbarSeverity("success");
//         setSnackbarOpen(true);
//         navigate("/profile"); // Navigate to profile page upon successful login
//       } else {
//         setSnackbarMessage(result.message || "Login failed. Please try again.");
//         setSnackbarSeverity("error");
//         setSnackbarOpen(true);
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//       setSnackbarMessage("Failed to log in. Try again later.");
//       setSnackbarSeverity("error");
//       setSnackbarOpen(true);
//     }
//   };

//   const handleCloseSnackbar = () => {
//     setSnackbarOpen(false);
//   };

//   return (
//     <Container
//       component="main"
//       maxWidth="xs"
//       sx={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         minHeight: "100vh",
//         bgcolor: "background.default",
//       }}
//     >
//       <Paper elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
//         <Typography component="h2" variant="h5" align="center" gutterBottom>
//           Login to Your Account
//         </Typography>
//         <Typography variant="body2" align="center" color="textSecondary" gutterBottom>
//           Don’t have an account?{" "}
//           <Link component="button" onClick={() => navigate("/signup")} color="primary">
//             Sign up
//           </Link>
//         </Typography>
//         <Box component="form" noValidate sx={{ mt: 2 }} onSubmit={handleLogin}>
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="emailOrPhone"
//             label="Email"
//             name="emailOrPhone"
//             autoComplete="email"
//             autoFocus
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type={showPassword ? "text" : "password"}
//             id="password"
//             autoComplete="current-password"
//             InputProps={{
//               endAdornment: (
//                 <InputAdornment position="end">
//                   <IconButton
//                     onClick={() => setShowPassword((prev) => !prev)}
//                     edge="end"
//                     aria-label="toggle password visibility"
//                   >
//                     {showPassword ? <VisibilityOff /> : <Visibility />}
//                   </IconButton>
//                 </InputAdornment>
//               ),
//             }}
//           />
//           <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2 }}>
//             Login
//           </Button>
//         </Box>
//       </Paper>
//       <Snackbar
//         open={snackbarOpen}
//         autoHideDuration={6000}
//         onClose={handleCloseSnackbar}
//         anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
//       >
//         <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: "100%" }}>
//           {snackbarMessage}
//         </Alert>
//       </Snackbar>
//     </Container>
//   );
// }















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
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import emailIcon from '../Assests/email.svg';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

export default function LoginForm() {
  const navigate = useNavigate();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const user = {
      email: data.get("email"),
      password: data.get("password"),
    };

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const result = await response.json();
      if (response.ok) {
        setSnackbarMessage("Login successful!");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);
        navigate("/profile");
      } else {
        setSnackbarMessage(result.message || "Login failed. Please try again.");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      }
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
          // borderRadius: "50%",
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
          borderRadius: "50%",
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
        <Typography
          component="h1"
          variant="h5"
          align="center"
          gutterBottom
          sx={{ color: "white" }}
        >
          Log In
        </Typography>
        <Box component="form" noValidate onSubmit={handleLogin} sx={{ mt: 2 }}>
          
            <div style={{ marginBottom: "10px" }}>
              <div style={{ marginTop: "25px" }}>
                <div
                  style={{ display: "flex", position: "relative", top: "2px",color:"#ffffff" }}
                >
                    <img
                    src={emailIcon}
                    alt="email"
                    style={{ width: 24, height: 24, marginRight:"8px"}}
                  />
                 Email
                </div>
              </div>
              <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            placeholder="example@gmail.com"
            name="email"
            autoComplete="email"
            sx={{ bgcolor: "white", borderRadius: 2 }}
          />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <div style={{ marginTop: "10px" }}>
                <div
                  style={{ display: "flex", position: "relative", top: "2px",color:"#ffffff" }}
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
            // label="Password"
            placeholder="********"
            type={showPassword ? "text" : "password"}
            id="password"
            autoComplete="current-password"
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
            sx={{ mt: 3, mb: 2, bgcolor: "blue", color: "white", borderRadius: 2 }}
          >
            Log In
          </Button>
        </Box>
        <Typography
          variant="body2"
          align="center"
          color="white"
          gutterBottom
        >
          Or
        </Typography>
        <Typography variant="body2" align="center" color="white">
          Don’t have an account? {" "}
          <Link
            component="button"
            onClick={() => navigate("/signup")}
            sx={{ color: "blue" }}
          >
            Sign Up
          </Link>
        </Typography>
      </Container>

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
    </Box>
  );
}
