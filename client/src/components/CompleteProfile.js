import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  Checkbox,
  Snackbar,
  Alert,
  FormControlLabel,
  Container,
  MenuItem,
} from "@mui/material";
import api from "../api";

 function CompleteProfile() {
  const navigate = useNavigate();

  // State management
  const [mobileNumber, setMobileNumber] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  // const [currentJob, setCurrentJob] = useState(false);
  const [employmentTypes, setEmploymentTypes] = useState([]);
  const [genderOptions, setGenderOptions] = useState([]);
  const [gender, setGender] = useState("");
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

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const [employmentRes, genderRes] = await Promise.all([
           api.getEmploymentTypes(),
          api.getGenders(),
        ]);
        setEmploymentTypes(employmentRes.data);
        setGenderOptions(genderRes.data);
      } catch (err) {
        console.error("Failed to fetch options:", err);
      }
    };

    fetchOptions();
  }, []);
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
      mobileNumber,
      email: document.getElementById("email").value,
      dob: document.getElementById("dob").value || null,
      gender,
      country: document.getElementById("country").value,
      state: document.getElementById("state").value,
      city: document.getElementById("city").value,
      experience: experiences,
    };

    try {
     await api.createProfile(profileData);
      setSnackbar({
        open: true,
        message: "Profile saved successfully!",
        severity: "success",
      });

      setTimeout(() => {
        navigate("/profile");
      }, 3000);
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Fill all fields to save profile.",
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
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        // alignItems: "center",
        justifyContent: "space-between",
        bgcolor: "#1976d2",
        position: "relative",
        overflow: "hidden",
        padding: 4,
      }}>
      {/* Left Content */}
      <Box
        sx={{
          pl: { xs: 0, md: 4 },
          zIndex: 1,
          color: "white",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
          Fill Your Profile Here
        </Typography>
        <Typography variant="p">
          Enter your details to complete your profile.
        </Typography>
      </Box>

      {/* Form Container */}
      <Container component="main"
        maxWidth="md"
        sx={{
          bgcolor: "white",
          borderRadius: 4,
          p: 4,
          boxShadow: 4,
          zIndex: 1,
          textAlign: "center",
        }}>

        {/* Basic Information */}
        <Typography variant="h6" gutterBottom sx={{ color: "#1976d2", mb: 4 }}>
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
              <TextField
                select
                required
                fullWidth
                id="gender"
                label="Gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                {genderOptions?.map((option) => (
                  <MenuItem key={option._id} value={option.name}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>

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
          <Typography variant="h6" sx={{ mt: 4, color: "#1976d2" }} gutterBottom>
            Experience
          </Typography>
          {experiences.map((exp, index) => (
            <Box key={index} sx={{ mb: 4, border: "none", p: 2, borderRadius: 2 }}>
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
                    select
                    required
                    fullWidth
                    label="Employment Type"
                    value={exp.employmentType}
                    onChange={(e) =>
                      handleExperienceChange(index, "employmentType", e.target.value)
                    }
                  >
                    {employmentTypes?.map((option) => (
                      <MenuItem key={option} value={option.name}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </TextField>
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
                <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-start" }}>
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
                {experiences.length > 1 && (
                  <Button
                    color="error"
                    variant="outlined"
                    onClick={() => removeExperience(index)}
                  >
                    Remove
                  </Button>
                )}
              </Box>
            </Box>
          ))}
          <Button variant="outlined" fullWidth onClick={addExperience} sx={{ mt: 2, textTransform: "capitalize", color: "red", borderColor: "red", }}>
            Add Experience
          </Button>

          <Box sx={{ mt: 4 }}>
            <Button fullWidth variant="contained" size="large" type="submit"
              sx={{
                textTransform: "capitalize",
                backgroundColor: "red",
              }}>
              Save Profile
            </Button>
          </Box>
        </Box>

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
    </Box>
  );
}
export default CompleteProfile;