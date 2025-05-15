import React, { useEffect, useState } from "react";
import axios from "axios";
import { CardContent, Grid, IconButton,Tooltip } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";


const Profile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchLastUpdatedProfile = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/profile");
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchLastUpdatedProfile();
  }, []);

  const handleForm = (event) => {
    event.preventDefault();
    navigate("/profileform");
  };
  const handleEditForm = (event) => {
    event.preventDefault();
    navigate("/updateprofile");
  };

  return (

    <Box
     sx={{
        bgcolor: "#1976d2",
        padding: 4.15,
      }}>
      {/* Profile Avatar and Name */}
      <Box
        sx={{
          textAlign: "center",
          p: 4,
        }}>

        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontFamily: "Lora, serif",
            fontSize: "2.5rem",
            color: "white",
            marginBottom: 1,
          }}>
          Profile </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: "1.2rem",
            color: "white",
            marginBottom: 1,
          }}>
          I'm a <span>
            {profile && profile.experience && profile.experience.length > 0
              ? profile.experience[0].jobTitle
              : "-"}
          </span>
        </Typography>
      </Box>

      {/* Name Section */}
      <Grid item xs={12} textAlign="center">
        <Avatar
          sx={{
            bgcolor: "green",
            width: 150,
            height: 150,
            mx: "auto",
            fontSize: 40,
          }}
        >
          {profile ? profile.name.charAt(0) : "M"}
        </Avatar>
        {/* <Typography variant="h5" sx={{ mt: 2, fontWeight: "bold" }}>
      {profile ? profile.name : "Loading..."}
    </Typography> */}
      </Grid>

      {/* Bio-Data and Experience Section */}
      <Grid container item xs={12} spacing={2}>
        {/* Bio-Data Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              mt: 3,
              ml: 5,
              mr: 5,
              p: 3,
              backgroundColor: "white",
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1,
                padding: "10px"
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1976d2" }}>
                About Me
              </Typography>
              <Box sx={{ display: "flex" }}>
                <Tooltip title="Edit">
                <IconButton onClick={handleEditForm}>
                  <EditIcon sx={{ color: "#1976d2" }} />
                </IconButton>
                </Tooltip>
                <Tooltip title="Create">
                <IconButton onClick={handleForm}>
                  <AddCircleIcon sx={{ color: "#1976d2" }} />
                </IconButton>
                </Tooltip>
              </Box>
            </Box>

            {profile ? (
              <CardContent>

                {/* Bio-data fields */}
                <div>
                  <Grid container spacing={2}>
                    <Grid item md={4}>
                      <div>Name</div>
                    </Grid>
                    <Grid item md={1}>
                      :
                    </Grid>
                    <Grid item md={7}>
                      <span>
                        {profile.name || "-"}
                      </span>
                    </Grid>
                  </Grid>
                </div>
                <div>
                  <Grid container spacing={2}>
                    <Grid item md={4}>
                      <div>E-Mail</div>
                    </Grid>
                    <Grid item md={1}>
                      :
                    </Grid>
                    <Grid item md={7}>
                      <span>
                        {profile.email || "-"}
                      </span>
                    </Grid>
                  </Grid>
                </div>
                <div>
                  <Grid container spacing={2}>
                    <Grid item md={4}>
                      <div>Gender</div>
                    </Grid>
                    <Grid item md={1}>
                      :
                    </Grid>
                    <Grid item md={7}>
                      <span>
                        {profile.gender || "-"}
                      </span>
                    </Grid>
                  </Grid>
                </div>
                <div>
                  <Grid container spacing={2}>
                    <Grid item md={4}>
                      <div>Mobile Number</div>
                    </Grid>
                    <Grid item md={1}>
                      :
                    </Grid>
                    <Grid item md={7}>
                      <span>
                        {profile.mobileNumber || "-"}
                      </span>
                    </Grid>
                  </Grid>
                </div>
                <div>
                  <Grid container spacing={2}>
                    <Grid item md={4}>
                      <div>Date of Birth</div>
                    </Grid>
                    <Grid item md={1}>
                      :
                    </Grid>
                    <Grid item md={7}>
                      <span>
                        {profile.dob || "-"}
                      </span>
                    </Grid>
                  </Grid>
                </div>
                <div>
                  <Grid container spacing={2}>
                    <Grid item md={4}>
                      <div>Country</div>
                    </Grid>
                    <Grid item md={1}>
                      :
                    </Grid>
                    <Grid item md={7}>
                      <span>
                        {profile.country || "-"}
                      </span>
                    </Grid>
                  </Grid>
                </div>
                <div>
                  <Grid container spacing={2}>
                    <Grid item md={4}>
                      <div>State</div>
                    </Grid>
                    <Grid item md={1}>
                      :
                    </Grid>
                    <Grid item md={7}>
                      <span>
                        {profile.state || "-"}
                      </span>
                    </Grid>
                  </Grid>
                </div>
                <div>
                  <Grid container spacing={2}>
                    <Grid item md={4}>
                      <div>City</div>
                    </Grid>
                    <Grid item md={1}>
                      :
                    </Grid>
                    <Grid item md={7}>
                      <span>
                        {profile.city || "-"}
                      </span>
                    </Grid>
                  </Grid>
                </div>
              </CardContent>
            ) : (
              <Typography variant="body1" color="textSecondary">
                Bio-data not available.
              </Typography>
            )}
          </Box>
        </Grid>

        {/* Experience Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              mt: 3,
              ml: 5,
              mr: 5,
              p: 3,
              backgroundColor: "white",
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px"
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1976d2" }}>
                About My Experience
              </Typography>
              <Box sx={{ display: "flex" }}>
                <Tooltip title="Edit">
                <IconButton onClick={handleEditForm}>
                  <EditIcon sx={{ color: "#1976d2" }} />
                </IconButton>
                </Tooltip>
                <Tooltip title="Create">
                <IconButton onClick={handleForm}>
                  <AddCircleIcon sx={{ color: "#1976d2" }} />
                </IconButton>
                </Tooltip>
              </Box>
            </Box>

            {profile && profile.experience && profile.experience.length > 0 ? (
              profile.experience.map((exp, index) => (
                <CardContent>
                  {/* Experience fields */}
                  <div>
                    <Grid container spacing={2}>
                      <Grid item md={4}>
                        <div>Job Title</div>
                      </Grid>
                      <Grid item md={1}>
                        :
                      </Grid>
                      <Grid item md={7}>
                        <span>
                          {exp.jobTitle || "-"}
                        </span>
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={2}>
                      <Grid item md={4}>
                        <div>Company Name</div>
                      </Grid>
                      <Grid item md={1}>
                        :
                      </Grid>
                      <Grid item md={7}>
                        <span>
                          {exp.companyName || "-"}
                        </span>
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={2}>
                      <Grid item md={4}>
                        <div>Employment Type</div>
                      </Grid>
                      <Grid item md={1}>
                        :
                      </Grid>
                      <Grid item md={7}>
                        <span>
                          {exp.employmentType || "-"}
                        </span>
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={2}>
                      <Grid item md={4}>
                        <div>Location</div>
                      </Grid>
                      <Grid item md={1}>
                        :
                      </Grid>
                      <Grid item md={7}>
                        <span>
                          {exp.location || "-"}
                        </span>
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={2}>
                      <Grid item md={4}>
                        <div>Start Date</div>
                      </Grid>
                      <Grid item md={1}>
                        :
                      </Grid>
                      <Grid item md={7}>
                        <span>
                          {exp.startDate || "-"}
                        </span>
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={2}>
                      <Grid item md={4}>
                        <div>End Date</div>
                      </Grid>
                      <Grid item md={1}>
                        :
                      </Grid>
                      <Grid item md={7}>
                        <span>
                          {exp.endDate || "Present"}
                        </span>
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={2}>
                      <Grid item md={4}>
                        <div>Current CTC (₹)</div>
                      </Grid>
                      <Grid item md={1}>
                        :
                      </Grid>
                      <Grid item md={7}>
                        <span>
                          {exp.currentCTC || "-"}
                        </span>
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={2}>
                      <Grid item md={4}>
                        <div>Expected CTC (₹)</div>
                      </Grid>
                      <Grid item md={1}>
                        :
                      </Grid>
                      <Grid item md={7}>
                        <span>
                          {exp.expectedCTC || "-"}
                        </span>
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={2}>
                      <Grid item md={4}>
                        <div>Description</div>
                      </Grid>
                      <Grid item md={1}>
                        :
                      </Grid>
                      <Grid item md={7}>
                        <span>
                          {exp.description || "-"}
                        </span>
                      </Grid>
                    </Grid>
                  </div>
                </CardContent>
              ))
            ) : (
              <Typography variant="body1" color="textSecondary">
                No experience available.
              </Typography>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
