// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { TextField, Button, Typography, Box, Grid, MenuItem, Select, FormControlLabel, FormControl, InputLabel, Paper, Checkbox, Container, Snackbar, Alert } from "@mui/material";
// import axios from "axios";

// export default function UpdateProfile() {
//   const navigate = useNavigate();
//   const [profileData, setProfileData] = useState({
//     name: "",
//     mobileNumber: "",
//     email: "",
//     dob: "",
//     gender: "",
//     country: "",
//     state: "",
//     city: "",
//     experience: [{
//       jobTitle: "",
//       employmentType: "",
//       companyName: "",
//       location: "",
//       startDate: "",
//       endDate: "",
//       currentCTC: "",
//       expectedCTC: "",
//       description: "",
//     }],
//   });
//   console.log("profileData",profileData)
//   const [snackbar, setSnackbar] = useState({
//     open: false,
//     message: "",
//     severity: "success",
//   });

//   useEffect(() => {
//     // Fetch existing profile data when the component mounts
//     const fetchProfileData = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/profile");
//         setProfileData(response.data);
//       } catch (error) {
//         console.error("Failed to fetch profile data", error);
//       }
//     };

//     fetchProfileData();
//   }, []);

//   const handleInputChange = (event) => {
//     const { id, value } = event.target;
//     setProfileData((prevState) => ({
//       ...prevState,
//       [id]: value,
//     }));
//   };

//   const handleExperienceChange = (event) => {
//     const { id, value } = event.target;
//     setProfileData((prevState) => ({
//       ...prevState,
//       experience: prevState.experience.map((exp, index) =>
//         index === 0 ? { ...exp, [id]: value } : exp
//       ),
//     }));
//   };
  
// console.log("handleExperienceChange",handleExperienceChange)
//   const handleForm = async (event) => {
//     event.preventDefault();

//     try {
//       // const response = await axios.put("http://localhost:5000/api/profile", profileData);
//       const response = await axios.put(
//         `http://localhost:5000/api/profile/${profileData._id}`, // Use the profile ID
//         profileData
//       );
//       setSnackbar({
//         open: true,
//         message: "Profile updated successfully!",
//         severity: "success",
//       });
//       console.log(response.data);

//       setTimeout(() => {
//         navigate("/profile");
//       }, 3000);

//     } catch (error) {
//       console.error("Failed to update profile", error);
//       setSnackbar({
//         open: true,
//         message: "Failed to update profile.",
//         severity: "error",
//       });
//     }
//   };

//   const handleCloseSnackbar = () => {
//     setSnackbar({ ...snackbar, open: false });
//   };

//   return (
//     <Container maxWidth="md" sx={{ mt: 4 }}>
//       <Typography variant="h5" style={{ marginBottom: "10px" }} align="center">
//         Update Your Profile
//       </Typography>
//       <Paper elevation={3} sx={{ p: 4, mt: 4, borderRadius: 2 }}>
//         <Typography variant="h6" style={{ marginBottom: "20px" }}>
//           Basic Information
//         </Typography>
//         <Box component="form" noValidate onSubmit={handleForm}>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 required
//                 fullWidth
//                 id="name"
//                 label="Name"
//                 value={profileData.name}
//                 onChange={handleInputChange}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 required
//                 fullWidth
//                 id="mobileNumber"
//                 label="Mobile number"
//                 value={profileData.mobileNumber}
//                 onChange={handleInputChange}
//                 inputProps={{ maxLength: 10 }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 value={profileData.email}
//                 onChange={handleInputChange}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 id="dob"
//                 label="Date Of Birth"
//                 type="date"
//                 InputLabelProps={{ shrink: true }}
//                 value={profileData.dob}
//                 onChange={handleInputChange}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               {/* <FormControl fullWidth>
//                 <InputLabel id="gender-label">Gender</InputLabel>
//                 <Select
//                   labelId="gender-label"
//                   id="gender"
//                   value={profileData.gender}
//                   onChange={handleInputChange}
//                 >
//                   <MenuItem value="">
//                     <em>Select gender</em>
//                   </MenuItem>
//                   <MenuItem value="male">Male</MenuItem>
//                   <MenuItem value="female">Female</MenuItem>
//                   <MenuItem value="other">Other</MenuItem>
//                 </Select>
//               </FormControl> */}
//                <TextField
//                 required
//                 fullWidth
//                 id="gender"
//                 label="Gender"
//                 value={profileData.gender}
//                 onChange={handleInputChange}
//               />
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <TextField
//                 required
//                 fullWidth
//                 id="country"
//                 label="Country"
//                 value={profileData.country}
//                 onChange={handleInputChange}
//               />
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <TextField
//                 required
//                 fullWidth
//                 id="state"
//                 label="State"
//                 value={profileData.state}
//                 onChange={handleInputChange}
//               />
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <TextField
//                 required
//                 fullWidth
//                 id="city"
//                 label="City"
//                 value={profileData.city}
//                 onChange={handleInputChange}
//               />
//             </Grid>
//           </Grid>

//           <Typography variant="h6" style={{ marginTop: "50px", marginBottom: "20px" }}>
//             Experience
//           </Typography>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 required
//                 fullWidth
//                 id="jobTitle"
//                 label="Job Title"
//                 // value={profileData.experience.jobTitle}
//                 value={profileData.experience[0]?.jobTitle || ""}
//                 onChange={handleExperienceChange}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               {/* <FormControl fullWidth required>
//                 <InputLabel id="employment-type-label">Employment Type</InputLabel>
//                 <Select
//                   labelId="employment-type-label"
//                   id="employmentType"
//                   value={profileData.experience.employmentType}
//                   onChange={handleExperienceChange}
//                 >
//                   <MenuItem value="">
//                     <em>Select Employment Type</em>
//                   </MenuItem>
//                   <MenuItem value="full-time">Full-Time</MenuItem>
//                   <MenuItem value="part-time">Part-Time</MenuItem>
//                   <MenuItem value="internship">Internship</MenuItem>
//                   <MenuItem value="freelance">Freelance</MenuItem>
//                 </Select>
//               </FormControl> */}
//              <TextField
//                 required
//                 fullWidth
//                 id="employment-type"
//                 label="Employment Type"
//                 value={profileData.experience[0]?.employmentType}
//                 onChange={handleExperienceChange}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 required
//                 fullWidth
//                 id="companyName"
//                 label="Company Name"
//                 value={profileData.experience[0]?.companyName}
//                 onChange={handleExperienceChange}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 required
//                 fullWidth
//                 id="location"
//                 label="Location"
//                 value={profileData.experience[0]?.location}
//                 onChange={handleExperienceChange}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 required
//                 fullWidth
//                 id="startDate"
//                 label="Start Date"
//                 type="date"
//                 InputLabelProps={{ shrink: true }}
//                 value={profileData.experience[0]?.startDate}
//                 onChange={handleExperienceChange}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 required
//                 fullWidth
//                 id="endDate"
//                 label="End Date"
//                 type="date"
//                 InputLabelProps={{ shrink: true }}
//                 value={profileData.experience[0]?.endDate}
//                 onChange={handleExperienceChange}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 required
//                 fullWidth
//                 id="currentCTC"
//                 label="Current CTC (₹)"
//                 value={profileData.experience[0]?.currentCTC}
//                 onChange={handleExperienceChange}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 required
//                 fullWidth
//                 id="expectedCTC"
//                 label="Expected CTC (₹)"
//                 value={profileData.experience[0]?.expectedCTC}
//                 onChange={handleExperienceChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 required
//                 fullWidth
//                 id="description"
//                 label="Description"
//                 value={profileData.experience[0]?.description}
//                 onChange={handleExperienceChange}
//                 multiline
//                 rows={4}
//               />
//             </Grid>
//           </Grid>
//           <Box sx={{ mt: 4 }}>
//             <Button fullWidth variant="contained" color="primary" size="large" type="submit">
//               Update Profile
//             </Button>
//           </Box>
//         </Box>
//       </Paper>

//       {/* Snackbar */}
//       <Snackbar
//         open={snackbar.open}
//         autoHideDuration={6000}
//         onClose={handleCloseSnackbar}
//         anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
//       >
//         <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: "100%" }}>
//           {snackbar.message}
//         </Alert>
//       </Snackbar>
//     </Container>
//   );
// }






import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Box, Grid, Paper, Snackbar, Alert, Container } from "@mui/material";
import axios from "axios";

export default function UpdateProfile() {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    dob: "",
    gender: "",
    country: "",
    state: "",
    city: "",
    experience: [
      {
        jobTitle: "",
        employmentType: "",
        companyName: "",
        location: "",
        startDate: "",
        endDate: "",
        currentCTC: "",
        expectedCTC: "",
        description: "",
      },
    ],
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/profile");
        setProfileData(response.data);
      } catch (error) {
        console.error("Failed to fetch profile data", error);
      }
    };

    fetchProfileData();
  }, []);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setProfileData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleExperienceChange = (index, event) => {
    const { id, value } = event.target;
    setProfileData((prevState) => {
      const updatedExperience = [...prevState.experience];
      updatedExperience[index][id] = value;
      return { ...prevState, experience: updatedExperience };
    });
  };

  const addExperience = () => {
    setProfileData((prevState) => ({
      ...prevState,
      experience: [
        ...prevState.experience,
        {
          jobTitle: "",
          employmentType: "",
          companyName: "",
          location: "",
          startDate: "",
          endDate: "",
          currentCTC: "",
          expectedCTC: "",
          description: "",
        },
      ],
    }));
  };

  const removeExperience = (index) => {
    setProfileData((prevState) => ({
      ...prevState,
      experience: prevState.experience.filter((_, i) => i !== index),
    }));
  };

  const handleForm = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:5000/api/profile/${profileData._id}`,
        profileData
      );
      setSnackbar({
        open: true,
        message: "Profile updated successfully!",
        severity: "success",
      });
      console.log(response.data);

      setTimeout(() => {
        navigate("/profile");
      }, 3000);
    } catch (error) {
      console.error("Failed to update profile", error);
      setSnackbar({
        open: true,
        message: "Failed to update profile.",
        severity: "error",
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h5" align="center">
        Update Your Profile
      </Typography>
      <Paper elevation={3} sx={{ p: 4, mt: 4, borderRadius: 2 }}>
        <Typography variant="h6" marginBottom="20px">Basic Information</Typography>
        <Box component="form" noValidate onSubmit={handleForm}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="name"
                label="Name"
                value={profileData.name}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="mobileNumber"
                label="Mobile Number"
                value={profileData.mobileNumber}
                onChange={handleInputChange}
                inputProps={{ maxLength: 10 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                value={profileData.email}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="dob"
                label="Date Of Birth"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={profileData.dob}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
               <TextField
                required
                fullWidth
                id="gender"
                label="Gender"
                value={profileData.gender}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                fullWidth
                id="country"
                label="Country"
                value={profileData.country}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                fullWidth
                id="state"
                label="State"
                value={profileData.state}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                fullWidth
                id="city"
                label="City"
                value={profileData.city}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>

          <Typography variant="h6" sx={{ mt: 4 }} marginBottom="20px">
            Experience
          </Typography>
          {profileData.experience.map((exp, index) => (
            <Grid container spacing={2} key={index} sx={{ mb: 2 }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="jobTitle"
                  label="Job Title"
                  value={exp.jobTitle}
                  onChange={(event) => handleExperienceChange(index, event)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="employmentType"
                  label="Employment Type"
                  value={exp.employmentType}
                  onChange={(event) => handleExperienceChange(index, event)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="companyName"
                  label="Company Name"
                  value={exp.companyName}
                  onChange={(event) => handleExperienceChange(index, event)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="location"
                  label="Location"
                  value={exp.location}
                  onChange={(event) => handleExperienceChange(index, event)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="startDate"
                  label="Start Date"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={exp.startDate}
                  onChange={(event) => handleExperienceChange(index, event)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="endDate"
                  label="End Date"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={exp.endDate}
                  onChange={(event) => handleExperienceChange(index, event)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="currentCTC"
                  label="Current CTC"
                  value={exp.currentCTC}
                  onChange={(event) => handleExperienceChange(index, event)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="expectedCTC"
                  label="Expected CTC"
                  value={exp.expectedCTC}
                  onChange={(event) => handleExperienceChange(index, event)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="description"
                  label="Description"
                  multiline
                  rows={4}
                  value={exp.description}
                  onChange={(event) => handleExperienceChange(index, event)}
                />
              </Grid>
              <Grid item xs={12}>
              <Box sx={{ mt: 2, textAlign: "right" }}>   
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => removeExperience(index)}
                >
                  Remove Experience
                </Button>
                </Box>
              </Grid>
            </Grid>
          ))}
          <Button
            variant="contained"
            onClick={addExperience}
            sx={{ mt: 2 }}
          >
            Add Experience
          </Button>

          <Box sx={{ mt: 4 }}>
            <Button fullWidth variant="contained" color="primary" size="large" type="submit">
              Update Profile
            </Button>
          </Box>
        </Box>
      </Paper>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: "100%" }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}
