import React, { useState } from "react";
import { Container, Typography, Box, Grid, Paper } from "@mui/material";
import CompleteProfile from "./CompleteProfile"; // Ensure the paths are correct

export default function ProfilePage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Complete Your Profile
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        gutterBottom
        color="textSecondary"
      >
        Provide your basic information and experience to tailor your profile.
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <CompleteProfile />
          </Paper>
        </Grid>
      </Grid>
    </Container>
    
  );
}
