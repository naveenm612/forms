import React ,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Box, Grid, MenuItem, Select,FormControlLabel, FormControl, InputLabel, Paper, Checkbox, Container } from "@mui/material";

export default function CompleteProfile() {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState("");

  const handleMobileNumberChange = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value) && value.length <= 10) {
      setMobileNumber(value);
    }
  };

  const handleForm = (event) => {
    event.preventDefault();
    navigate("/profile"); // Change the route to match your application
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom align="center">
        Complete Your Profile
      </Typography>
      <Typography variant="subtitle1" gutterBottom align="center" color="textSecondary">
        Enter your goal and tailor your learning path.
      </Typography>

      <Paper elevation={3} sx={{ p: 4, mt: 4, borderRadius: 2 }}>
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
                label="Mobile number"
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
                label="Date Of Birth"
                placeholder="dd-mm-yyyy"
                InputLabelProps={{ shrink: true }}
                type="date"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="gender-label">Gender</InputLabel>
                <Select labelId="gender-label" id="gender" defaultValue="">
                  <MenuItem value="">
                    <em>Select gender</em>
                  </MenuItem>
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id="country-label">Country</InputLabel>
                <Select labelId="country-label" id="country" defaultValue="">
                  <MenuItem value="">
                    <em>Select country</em>
                  </MenuItem>
                  <MenuItem value="india">India</MenuItem>
                  <MenuItem value="usa">USA</MenuItem>
                  <MenuItem value="uk">UK</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id="state-label">State</InputLabel>
                <Select labelId="state-label" id="state" defaultValue="">
                  <MenuItem value="">
                    <em>Select state</em>
                  </MenuItem>
                  <MenuItem value="karnataka">Karnataka</MenuItem>
                  <MenuItem value="tamilnadu">Tamil Nadu</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id="city-label">City</InputLabel>
                <Select labelId="city-label" id="city" defaultValue="">
                  <MenuItem value="">
                    <em>Select city</em>
                  </MenuItem>
                  <MenuItem value="bangalore">Bangalore</MenuItem>
                  <MenuItem value="chennai">Chennai</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Box sx={{ mt: 4 }}>
            <Button type="submit" fullWidth variant="contained" color="primary" size="large">
              Save Basic Info
            </Button>
          </Box>
        </Box>
      </Paper>
    
          <Paper elevation={3} sx={{ p: 4, mt: 4, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              Experience
            </Typography>
            <Box component="form" noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="job-title"
                    label="Job Title"
                    placeholder="Enter job title"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth required>
                    <InputLabel id="employment-type-label">
                      Employment Type
                    </InputLabel>
                    <Select
                      labelId="employment-type-label"
                      id="employment-type"
                      defaultValue=""
                    >
                      <MenuItem value="">
                        <em>Select Employment Type</em>
                      </MenuItem>
                      <MenuItem value="full-time">Full-Time</MenuItem>
                      <MenuItem value="part-time">Part-Time</MenuItem>
                      <MenuItem value="internship">Internship</MenuItem>
                      <MenuItem value="freelance">Freelance</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="company-name"
                    label="Company Name"
                    placeholder="Enter company name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="location"
                    label="Location"
                    placeholder="Enter location"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="I currently work here"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="start-date"
                    label="Start Date"
                    placeholder="dd-mm-yyyy"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="end-date"
                    label="End Date"
                    placeholder="dd-mm-yyyy"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="current-ctc"
                    label="Current CTC (₹)"
                    placeholder="Enter current CTC"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="expected-ctc"
                    label="Expected CTC (₹)"
                    placeholder="Enter expected CTC"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="description"
                    label="Description"
                    placeholder="Describe your responsibilities and achievements"
                    multiline
                    rows={4}
                  />
                </Grid>
              </Grid>
              <Box sx={{ mt: 4 }}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={handleForm} // Fixed here
                >
                  Save Experience
                </Button>
              </Box>
            </Box>
          </Paper>
        </Container>
  );
}
