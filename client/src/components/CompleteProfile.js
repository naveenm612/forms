// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   TextField,
//   Button,
//   Typography,
//   Box,
//   Grid,
//   MenuItem,
//   Select,
//   FormControl,
//   InputLabel,
//   Paper,
//   Checkbox,
//   Snackbar,
//   Alert,
//   FormControlLabel,
//   Container,
// } from "@mui/material";
// import axios from "axios";

// export default function CompleteProfile() {
//   const navigate = useNavigate();

//   // State management
//   const [mobileNumber, setMobileNumber] = useState("");
//   const [snackbar, setSnackbar] = useState({
//     open: false,
//     message: "",
//     severity: "success",
//   });
//   const [currentJob, setCurrentJob] = useState(false); // Checkbox state

//   // Handle mobile number change
//   const handleMobileNumberChange = (event) => {
//     const value = event.target.value;
//     if (/^\d*$/.test(value) && value.length <= 10) {
//       setMobileNumber(value);
//     }
//   };

//   // Handle form submission
//   const handleForm = async (event) => {
//     event.preventDefault();

//     const profileData = {
//       name: document.getElementById("name").value,
//       mobileNumber: mobileNumber,
//       email: document.getElementById("email").value,
//       dob: document.getElementById("dob").value || null,
//       gender: document.getElementById("gender").value,
//       country: document.getElementById("country").value,
//       state: document.getElementById("state").value,
//       city: document.getElementById("city").value,
//       experience: [
//         {
//           jobTitle: document.getElementById("job-title").value,
//           employmentType: document.getElementById("employment-type").value,
//           companyName: document.getElementById("company-name").value,
//           location: document.getElementById("location").value,
//           startDate: document.getElementById("start-date").value || null,
//           endDate: currentJob ? null : document.getElementById("end-date").value || null,
//           currentCTC: parseFloat(document.getElementById("current-ctc").value) || 0,
//           expectedCTC: parseFloat(document.getElementById("expected-ctc").value) || 0,
//           description: document.getElementById("description").value,
//         },
//       ],
//     };

//     try {
//       const response = await axios.post("http://localhost:5000/api/profile", profileData);
//       setSnackbar({
//         open: true,
//         message: "Profile saved successfully!",
//         severity: "success",
//       });
//       console.log(response.data);

//       setTimeout(() => {
//         navigate("/profile");
//       }, 3000);
      
//     } catch (error) {
//       setSnackbar({
//         open: true,
//         message: "Failed to save profile.",
//         severity: "error",
//       });
//       console.error("Error saving profile:", error);
//     }
//   };

//   // Handle snackbar close
//   const handleCloseSnackbar = () => {
//     setSnackbar({ ...snackbar, open: false });
//   };

//   return (
//     <Container maxWidth="md" sx={{ mt: 4 }}>
//       <Typography variant="h5" align="center" gutterBottom>
//         Complete Your Profile
//       </Typography>
//       <Typography variant="subtitle1" align="center" color="textSecondary" gutterBottom>
//         Enter your details to complete your profile.
//       </Typography>

//       <Paper elevation={3} sx={{ p: 4, mt: 4, borderRadius: 2 }}>
//         {/* Basic Information */}
//         <Typography variant="h6" gutterBottom>
//           Basic Information
//         </Typography>
//         <Box component="form" noValidate onSubmit={handleForm}>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField required fullWidth id="name" label="Name" />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 required
//                 fullWidth
//                 id="mobile-number"
//                 label="Mobile Number"
//                 value={mobileNumber}
//                 onChange={handleMobileNumberChange}
//                 inputProps={{ maxLength: 10 }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField required fullWidth id="email" label="Email Address" />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 id="dob"
//                 label="Date of Birth"
//                 type="date"
//                 InputLabelProps={{ shrink: true }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               {/* <FormControl fullWidth required>
//                 <InputLabel id="gender-label">Gender</InputLabel>
//                 <Select labelId="gender-label" id="gender" defaultValue="">
//                   <MenuItem value="Male">Male</MenuItem>
//                   <MenuItem value="Female">Female</MenuItem>
//                   <MenuItem value="Non-Binary">Non-Binary</MenuItem>
//                   <MenuItem value="Other">Other</MenuItem>
//                   <MenuItem value="Prefer not to say">Prefer not to say</MenuItem>
//                 </Select>
//               </FormControl> */}
//               <TextField required fullWidth id="gender" label="Gender" />
//               </Grid>
//             <Grid item xs={12} sm={4}>
//               <TextField required fullWidth id="country" label="Country" />
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <TextField required fullWidth id="state" label="State" />
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <TextField required fullWidth id="city" label="City" />
//             </Grid>
//           </Grid>

//           {/* Experience */}
//           <Typography variant="h6" sx={{ mt: 4 }} gutterBottom>
//             Experience
//           </Typography>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField required fullWidth id="job-title" label="Job Title" />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//                <TextField required fullWidth id="employment-type" label="Employment Type" />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField required fullWidth id="company-name" label="Company Name" />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField required fullWidth id="location" label="Location" />
//             </Grid>
//             <Grid item xs={12}>
//               <FormControlLabel
//                 control={<Checkbox checked={currentJob} onChange={() => setCurrentJob(!currentJob)} />}
//                 label="I currently work here"
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 required
//                 fullWidth
//                 id="start-date"
//                 label="Start Date"
//                 type="date"
//                 InputLabelProps={{ shrink: true }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 id="end-date"
//                 label="End Date"
//                 type="date"
//                 InputLabelProps={{ shrink: true }}
//                 disabled={currentJob}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField required fullWidth id="current-ctc" label="Current CTC (₹)" />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField required fullWidth id="expected-ctc" label="Expected CTC (₹)" />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 id="description"
//                 label="Description"
//                 multiline
//                 rows={4}
//                 placeholder="Describe your responsibilities and achievements"
//               />
//             </Grid>
//           </Grid>

//           <Box sx={{ mt: 4 }}>
//             <Button fullWidth variant="contained" color="primary" size="large" type="submit">
//               Save Profile
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




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  Paper,
  Checkbox,
  Snackbar,
  Alert,
  FormControlLabel,
  Container,
} from "@mui/material";
import axios from "axios";

export default function CompleteProfile() {
  const navigate = useNavigate();

  // State management
  const [mobileNumber, setMobileNumber] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const [currentJob, setCurrentJob] = useState(false);
  const [experiences, setExperiences] = useState([
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
      currentJob: false,
    },
  ]);

  // Handle mobile number change
  const handleMobileNumberChange = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value) && value.length <= 10) {
      setMobileNumber(value);
    }
  };

  // Handle experience change
  const handleExperienceChange = (index, field, value) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index][field] = value;
    setExperiences(updatedExperiences);
  };

  // Add a new experience
  const addExperience = () => {
    setExperiences([
      ...experiences,
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
        currentJob: false,
      },
    ]);
  };

  // Remove an experience
  const removeExperience = (index) => {
    const updatedExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(updatedExperiences);
  };

  // Handle form submission
  const handleForm = async (event) => {
    event.preventDefault();

    const profileData = {
      name: document.getElementById("name").value,
      mobileNumber: mobileNumber,
      email: document.getElementById("email").value,
      dob: document.getElementById("dob").value || null,
      gender: document.getElementById("gender").value,
      country: document.getElementById("country").value,
      state: document.getElementById("state").value,
      city: document.getElementById("city").value,
      experience: experiences,
    };

    try {
      const response = await axios.post("http://localhost:5000/api/profile", profileData);
      setSnackbar({
        open: true,
        message: "Profile saved successfully!",
        severity: "success",
      });
      console.log(response.data);

      setTimeout(() => {
        navigate("/profile");
      }, 3000);
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Failed to save profile.",
        severity: "error",
      });
      console.error("Error saving profile:", error);
    }
  };

  // Handle snackbar close
  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Complete Your Profile
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" gutterBottom>
        Enter your details to complete your profile.
      </Typography>

      <Paper elevation={3} sx={{ p: 4, mt: 4, borderRadius: 2 }}>
        {/* Basic Information */}
        <Typography variant="h6" gutterBottom>
          Basic Information
        </Typography>
        <Box component="form" noValidate onSubmit={handleForm}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField required fullWidth id="name" label="Name" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="mobile-number"
                label="Mobile Number"
                value={mobileNumber}
                onChange={handleMobileNumberChange}
                inputProps={{ maxLength: 10 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField required fullWidth id="email" label="Email Address" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="dob"
                label="Date of Birth"
                type="date"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField required fullWidth id="gender" label="Gender" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField required fullWidth id="country" label="Country" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField required fullWidth id="state" label="State" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField required fullWidth id="city" label="City" />
            </Grid>
          </Grid>

          {/* Experience */}
          <Typography variant="h6" sx={{ mt: 4 }} gutterBottom>
            Experience
          </Typography>
          {experiences.map((exp, index) => (
            <Box key={index} sx={{ mb: 4, border: "1px solid #ccc", p: 2, borderRadius: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Job Title"
                    value={exp.jobTitle}
                    onChange={(e) => handleExperienceChange(index, "jobTitle", e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Employment Type"
                    value={exp.employmentType}
                    onChange={(e) => handleExperienceChange(index, "employmentType", e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Company Name"
                    value={exp.companyName}
                    onChange={(e) => handleExperienceChange(index, "companyName", e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Location"
                    value={exp.location}
                    onChange={(e) => handleExperienceChange(index, "location", e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={exp.currentJob}
                        onChange={(e) =>
                          handleExperienceChange(index, "currentJob", e.target.checked)
                        }
                      />
                    }
                    label="I currently work here"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Start Date"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    value={exp.startDate}
                    onChange={(e) => handleExperienceChange(index, "startDate", e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="End Date"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    disabled={exp.currentJob}
                    value={exp.endDate}
                    onChange={(e) => handleExperienceChange(index, "endDate", e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Current CTC (₹)"
                    value={exp.currentCTC}
                    onChange={(e) => handleExperienceChange(index, "currentCTC", e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Expected CTC (₹)"
                    value={exp.expectedCTC}
                    onChange={(e) => handleExperienceChange(index, "expectedCTC", e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Description"
                    multiline
                    rows={4}
                    placeholder="Describe your responsibilities and achievements"
                    value={exp.description}
                    onChange={(e) => handleExperienceChange(index, "description", e.target.value)}
                  />
                </Grid>
              </Grid>
              <Box sx={{ mt: 2, textAlign: "right" }}>
                <Button
                  color="error"
                  variant="outlined"
                  onClick={() => removeExperience(index)}
                >
                  Remove
                </Button>
              </Box>
            </Box>
          ))}
          <Button variant="outlined" fullWidth onClick={addExperience} sx={{ mt: 2 }}>
            Add Experience
          </Button>

          <Box sx={{ mt: 4 }}>
            <Button fullWidth variant="contained" color="primary" size="large" type="submit">
              Save Profile
            </Button>
          </Box>
        </Box>
      </Paper>

      {/* Snackbar */}
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
