import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Box, Grid, Snackbar, Alert, MenuItem, Container } from "@mui/material";
import axios from "axios";

function UpdateProfile() {
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

  const [employmentTypes, setEmploymentTypes] = useState([]);
  const [genderOptions, setGenderOptions] = useState([]);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const [employmentRes, genderRes] = await Promise.all([
          axios.get("http://localhost:5000/api/employment-types"),
          axios.get("http://localhost:5000/api/genders"),
        ]);
        setEmploymentTypes(employmentRes.data);
        setGenderOptions(genderRes.data);
      } catch (err) {
        console.error("Failed to fetch options:", err);
      }
    };

    fetchOptions();
  }, []);
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
          Update Your Profile Here
        </Typography>
        <Typography variant="p">
          Edit your details if any mistake.
        </Typography>
      </Box>

      {/* Form Container */}

      <Container maxWidth="md"
        sx={{
          bgcolor: "white",
          borderRadius: 4,
          p: 4,
          boxShadow: 4,
          zIndex: 1,
          textAlign: "center",
        }}>

        <Typography variant="h6" marginBottom="20px" sx={{ color: "#1976d2", mb: 4 }}>Basic Information</Typography>
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
                select
                required
                fullWidth
                id="gender"
                label="Gender"
                value={profileData.gender}
                onChange={(event) =>
                  setProfileData((prevState) => ({
                    ...prevState,
                    gender: event.target.value,
                  }))
                }
              >
                {genderOptions.map((option) => (
                  <MenuItem key={option._id} value={option.name}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>

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

          <Typography variant="h6" sx={{ color: "#1976d2", mt: 4 }} marginBottom="20px">
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
                  select
                  required
                  fullWidth
                  label="Employment Type"
                  value={exp.employmentType}
                  onChange={(event) =>
                    setProfileData((prevState) => {
                      const updatedExperience = [...prevState.experience];
                      updatedExperience[index].employmentType = event.target.value;
                      return { ...prevState, experience: updatedExperience };
                    })
                  }
                >
                  {employmentTypes.map((option) => (
                    <MenuItem key={option._id} value={option.name}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>

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
                  {profileData.experience.length > 1 && (
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => removeExperience(index)}
                    >
                      Remove Experience
                    </Button>
                  )}
                </Box>
              </Grid>
            </Grid>
          ))}
          <Button
            variant="outlined" fullWidth
            onClick={addExperience}
            sx={{ mt: 2, textTransform: "capitalize", color: "red", borderColor: "red", }}>
            Add Experience
          </Button>

          <Box sx={{ mt: 4 }}>
            <Button fullWidth variant="contained" color="primary" size="large" type="submit" sx={{ textTransform: "capitalize", backgroundColor: "red" }}>
              Update Profile
            </Button>
          </Box>
        </Box>

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

export default UpdateProfile;