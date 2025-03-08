// RealEstatePage.js
import React from "react";
import {
    Box,
    Typography,
    Grid,
    Button,
    Link,
    Paper,
    Card,
    CardMedia,
    CardContent,
} from "@mui/material";


const RealEstatePage = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", fontFamily: "Arial, sans-serif" }}>
            <Box
                component="header"
                sx={{
                    backgroundColor: "#f4f4f4",
                    padding: "1rem",
                    textAlign: "center",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                }}
            >
                Header Section
            </Box>

            <Box
                component="main"
                sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
                    gap: "1.5rem",
                    padding: "1rem",
                }}
            >
                {/* Image Gallery */}
                <Grid container direction="column" spacing={2}>
                    <Grid item>
                        <Card sx={{ borderRadius: 2, overflow: "hidden" }}>
                            <CardMedia
                                component="img"
                                image="/path/to/main-image.jpg"
                                alt="Main view of the property"
                                sx={{ width: "100%", height: "auto" }}
                            />
                        </Card>
                    </Grid>
                    <Grid item container spacing={1}>
                        <Grid item xs={12} sm={6}>
                            <CardMedia
                                component="img"
                                image="/path/to/image1.jpg"
                                alt="Room 1"
                                sx={{ borderRadius: 1, width: "100%" }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <CardMedia
                                component="img"
                                image="/path/to/image2.jpg"
                                alt="Room 2"
                                sx={{ borderRadius: 1, width: "100%" }}
                            />
                        </Grid>
                    </Grid>
                </Grid>

                {/* Property Details */}
                <Box sx={{ display: "grid", gap: "1rem" }}>
                    {/* Header */}
                    <Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                            <Typography variant="h4" color="text.primary">
                                €2,200,000
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                1 bed | 58 sqm
                            </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ fontSize: "15px" }}>
                            1 bedroom apartment for sale in the Fontvieille
                        </Typography>
                        <Link href="#contact" underline="always" sx={{ color: "#D66D3C", mt: 1, display: "inline-block" }}>
                            Please contact us
                        </Link>
                        <Box>
                            <Button variant="contained" sx={{ mt: 2, backgroundColor: "#333333", color: "#fff", px: 4, width: "90%", }}>
                                Contact Agent
                            </Button>

                        </Box>
                    </Box>

                    {/* Facts and Features */}
                    <Box >
                        <Typography
                            variant="h6"
                            sx={{
                                borderBottom: "2px solid #ccc",
                                mb: 2,
                            }}
                        >
                            Facts & Features
                        </Typography>
                        <Box>
                            <Typography variant="body2" display="flex" alignItems="center" style={{ marginBottom: "10px" }}>
                                <strong>Neighbourhood:</strong>
                                <span style={{ marginLeft: "30px" }}>Fontvieille</span>
                            </Typography>
                            <Typography variant="body2" display="flex" alignItems="center" style={{ marginBottom: "10px" }}>
                                <strong>Price per sqm:</strong>
                                <span style={{ marginLeft: "41px" }}>€37,931</span>
                            </Typography>
                            <Typography variant="body2" display="flex" alignItems="center" style={{ marginBottom: "10px" }}>
                                <strong>Brochure:</strong>
                                <Link
                                    href="/path/to/brochure.pdf"
                                    style={{ marginLeft: "72px", color: "grey" }}
                                    target="_blank"
                                    rel="noopener"
                                >
                                    Download Brochure
                                </Link>
                            </Typography>
                            <Typography variant="body2" display="flex" alignItems="center" style={{ marginBottom: "10px" }}>
                                <strong>Floor plan:</strong>
                                <Link
                                    href="/path/to/floorplan.pdf"
                                    style={{ marginLeft: "67px", color: "grey" }}
                                    target="_blank"
                                    rel="noopener"
                                >
                                    View Floorplan
                                </Link>
                            </Typography>
                        </Box>

                    </Box>

                    <Typography variant="body2" color="text.secondary">
                        Superb and peaceful location in the port of Fontvieille surrounded by the harbour and sea. 1 bedroom
                        apartment with a lovely terrace spacious bedroom and kitchen. The residence includes concierge and a
                        cellar.
                    </Typography>

                    {/* Agent Details */}
                    <Box>
                    <Box>

                    </Box>
                    <Box style={{ marginTop: "5px"}}>
                        <Typography variant="body1" color="text.primary">
                            <strong>Reka Demeter</strong>
                        </Typography>
                        <Typography variant="body2">Real Estate Broker</Typography>
                        <Box display="flex" alignItems="center" gap={1} style={{ marginTop: "5x"}}>
                            <Typography style={{ color: "grey",}}>+377 93 25 86 66</Typography>
                            <span>|</span>
                            <Typography variant="body2">
                                <Link href="mailto:example@example.com" style={{ color: "grey", textDecoration: "underline" }}>
                                    Email
                                </Link>
                            </Typography>
                        </Box>
                        </Box>

                    </Box>

                    {/* Map */}
                    <Box
                        sx={{
                            backgroundColor: "#eaeaea",
                            height: "90px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 2,
                        }}
                    >
                        Map Section
                    </Box>
                </Box>
            </Box>

            <Box
                component="footer"
                sx={{
                    backgroundColor: "#f4f4f4",
                    padding: "1rem",
                    textAlign: "center",
                    fontSize: "1rem",
                }}
            >
                Footer Section
            </Box>
        </Box>
    );
};

export default RealEstatePage;