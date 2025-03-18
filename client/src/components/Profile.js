import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, IconButton } from "@mui/material";
import Button from "@mui/material/Button";
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
                <Typography variant="body1" sx={{ mt: 1 }}>
                  <strong>Name:</strong> {profile.name}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  <strong>E-Mail:</strong> {profile.email}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  <strong>Mobile Number:</strong> {profile.mobileNumber}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  <strong>Date of Birth:</strong> {profile.dob}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  <strong>Country:</strong> {profile.country}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  <strong>State:</strong> {profile.state}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  <strong> City:</strong> {profile.city}
                </Typography>
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
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {exp.jobTitle}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    {exp.companyName} 
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 1 }}>
                   {exp.employmentType}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    {exp.location}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    {exp.startDate} - {exp.endDate || "Present"}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    {exp.currentCTC}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    {exp.expectedCTC}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    {exp.description}
                  </Typography>
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
