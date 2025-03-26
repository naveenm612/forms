import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, Grid, IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import "./Style.css";

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
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f5f5f5", p: 2 }}>
      <Box sx={{ maxWidth: 800, mx: "auto" }}>
        {/* Profile Avatar and Name */}
        <Box
          sx={{
            textAlign: "center",
            p: 4,
            backgroundColor: "white",
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Avatar
            sx={{
              bgcolor: "green",
              width: 96,
              height: 96,
              mx: "auto",
              fontSize: 40,
            }}
          >
            {profile ? profile.name.charAt(0) : "M"}
          </Avatar>
          <Typography variant="h5" sx={{ mt: 2, fontWeight: "bold" }}>
            {profile ? profile.name : "Loading..."}
          </Typography>
        </Box>

        {/* Bio-Data Section */}
        <Box
          sx={{
            mt: 4,
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
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Bio-Data
            </Typography>
            <Box sx={{ display: "flex" }}>
              <IconButton onClick={handleEditForm}>
                <EditIcon />
              </IconButton>
              <IconButton color="primary" onClick={handleForm}>
                <AddCircleIcon />
              </IconButton>
            </Box>
          </Box>

          {profile ? (
            <Card sx={{ mb: 1 }}>
              <CardContent>
                <div>
                  <Grid container spacing={2}>
                    <Grid item md={4}>
                      <div className="firstName">Name</div>
                    </Grid>
                    <Grid item md={1}>
                      :
                    </Grid>
                    <Grid item md={7}>
                      <span className="lastName">
                        {profile.name
                          ? profile.name
                          : "-"}
                      </span>
                    </Grid>
                  </Grid>
                </div>
                <div>
                  <Grid container spacing={2}>
                    <Grid item md={4}>
                      <div className="firstName">E-Mail</div>
                    </Grid>
                    <Grid item md={1}>
                      :
                    </Grid>
                    <Grid item md={7}>
                      <span className="lastName">
                        {profile.email
                          ? profile.email
                          : "-"}
                      </span>
                    </Grid>
                  </Grid>
                </div>
                <div>
                  <Grid container spacing={2}>
                    <Grid item md={4}>
                      <div className="firstName">Gender</div>
                    </Grid>
                    <Grid item md={1}>
                      :
                    </Grid>
                    <Grid item md={7}>
                      <span className="lastName">
                        {profile.gender
                          ? profile.gender
                          : "-"}
                      </span>
                    </Grid>
                  </Grid>
                </div>
                <div>
                  <Grid container spacing={2}>
                    <Grid item md={4}>
                      <div className="firstName">Mobile Number</div>
                    </Grid>
                    <Grid item md={1}>
                      :
                    </Grid>
                    <Grid item md={7}>
                      <span className="lastName">
                        {profile.mobileNumber
                          ? profile.mobileNumber
                          : "-"}
                      </span>
                    </Grid>
                  </Grid>
                </div>
                <div>
                  <Grid container spacing={2}>
                    <Grid item md={4}>
                      <div className="firstName">Date of Birth</div>
                    </Grid>
                    <Grid item md={1}>
                      :
                    </Grid>
                    <Grid item md={7}>
                      <span className="lastName">
                        {profile.dob
                          ? profile.dob
                          : "-"}
                      </span>
                    </Grid>
                  </Grid>
                </div>
                <div>
                  <Grid container spacing={2}>
                    <Grid item md={4}>
                      <div className="firstName">Country</div>
                    </Grid>
                    <Grid item md={1}>
                      :
                    </Grid>
                    <Grid item md={7}>
                      <span className="lastName">
                        {profile.country
                          ? profile.country
                          : "-"}
                      </span>
                    </Grid>
                  </Grid>
                </div>
                <div>
                  <Grid container spacing={2}>
                    <Grid item md={4}>
                      <div className="firstName">State</div>
                    </Grid>
                    <Grid item md={1}>
                      :
                    </Grid>
                    <Grid item md={7}>
                      <span className="lastName">
                        {profile.state
                          ? profile.state
                          : "-"}
                      </span>
                    </Grid>
                  </Grid>
                </div>
                <div>
                  <Grid container spacing={2}>
                    <Grid item md={4}>
                      <div className="firstName">City</div>
                    </Grid>
                    <Grid item md={1}>
                      :
                    </Grid>
                    <Grid item md={7}>
                      <span className="lastName">
                        {profile.city
                          ? profile.city
                          : "-"}
                      </span>
                    </Grid>
                  </Grid>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Typography variant="body1" color="textSecondary">
              Bio-data not available.
            </Typography>
          )}

          {/* Experience Section */}

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Experience
          </Typography>
          {profile && profile.experience && profile.experience.length > 0 ? (
            profile.experience.map((exp, index) => (
              <Card sx={{ mb: 2 }} key={index}>
                <CardContent>
                  <div>
                    <Grid container spacing={2}>
                      <Grid item md={4}>
                        <div className="firstName">Job Title</div>
                      </Grid>
                      <Grid item md={1}>
                        :
                      </Grid>
                      <Grid item md={7}>
                        <span className="lastName">
                          {exp.jobTitle
                            ? exp.jobTitle
                            : "-"}
                        </span>
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={2}>
                      <Grid item md={4}>
                        <div className="firstName">Company Name</div>
                      </Grid>
                      <Grid item md={1}>
                        :
                      </Grid>
                      <Grid item md={7}>
                        <span className="lastName">
                          {exp.companyName
                            ? exp.companyName
                            : "-"}
                        </span>
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={2}>
                      <Grid item md={4}>
                        <div className="firstName">Employment Type</div>
                      </Grid>
                      <Grid item md={1}>
                        :
                      </Grid>
                      <Grid item md={7}>
                        <span className="lastName">
                          {exp.employmentType
                            ? exp.employmentType
                            : "-"}
                        </span>
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={2}>
                      <Grid item md={4}>
                        <div className="firstName">Location</div>
                      </Grid>
                      <Grid item md={1}>
                        :
                      </Grid>
                      <Grid item md={7}>
                        <span className="lastName">
                          {exp.location
                            ? exp.location
                            : "-"}
                        </span>
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={2}>
                      <Grid item md={4}>
                        <div className="firstName">Start Date</div>
                      </Grid>
                      <Grid item md={1}>
                        :
                      </Grid>
                      <Grid item md={7}>
                        <span className="lastName">
                          {exp.startDate
                            ? exp.startDate
                            : "-"}
                        </span>
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={2}>
                      <Grid item md={4}>
                        <div className="firstName">End Date</div>
                      </Grid>
                      <Grid item md={1}>
                        :
                      </Grid>
                      <Grid item md={7}>
                        <span className="lastName">
                          {exp.endDate
                            ? exp.endDate
                            : "Present"}
                        </span>
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={2}>
                      <Grid item md={4}>
                        <div className="firstName">Current CTC (₹)</div>
                      </Grid>
                      <Grid item md={1}>
                        :
                      </Grid>
                      <Grid item md={7}>
                        <span className="lastName">
                          {exp.currentCTC
                            ? exp.currentCTC
                            : "-"}
                        </span>
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={2}>
                      <Grid item md={4}>
                        <div className="firstName">Expected CTC (₹)</div>
                      </Grid>
                      <Grid item md={1}>
                        :
                      </Grid>
                      <Grid item md={7}>
                        <span className="lastName">
                          {exp.expectedCTC
                            ? exp.expectedCTC
                            : "-"}
                        </span>
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={2}>
                      <Grid item md={4}>
                        <div className="firstName">Description</div>
                      </Grid>
                      <Grid item md={1}>
                        :
                      </Grid>
                      <Grid item md={7}>
                        <span className="lastName">
                          {exp.description
                            ? exp.description
                            : "-"}
                        </span>
                      </Grid>
                    </Grid>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Typography variant="body1" color="textSecondary">
              No experience available.
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
