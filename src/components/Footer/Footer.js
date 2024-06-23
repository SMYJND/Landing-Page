import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { Facebook, X, LinkedIn, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#560BAD",
        color: "silver",
        display: "flex",
        flexDirection: "column",
        pt: "20px",
        pb: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row" },
          p: "20px",
        }}
      >
        <Box
          sx={{ width: { xs: "100%", sm: "25%" }, mb: { xs: "20px", sm: 0 } }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            About Us
          </Typography>
          <Typography variant="body2">
            We are a passionate team of designers, developers, and marketers
            dedicated to creating stunning and effective digital solutions. Our
            mission is to help businesses establish a strong online presence and
            achieve their goals through innovative design and marketing
            strategies.
          </Typography>
        </Box>
        <Box
          sx={{ width: { xs: "100%", sm: "15%" }, mb: { xs: "20px", sm: 0 } }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Company
          </Typography>
          <Box
            sx={{
              typography: "body2",
              color: "primary",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Link href="#" underline="hover" color="inherit">
              About Us
            </Link>
            <Link href="#" underline="hover" color="inherit">
              Services
            </Link>
            <Link href="#" underline="hover" color="inherit">
              Contact
            </Link>
            <Link href="#" underline="hover" color="inherit">
              Careers
            </Link>
            <Link href="#" underline="hover" color="inherit">
              Blog
            </Link>
          </Box>
        </Box>
        <Box
          sx={{ width: { xs: "100%", sm: "15%" }, mb: { xs: "20px", sm: 0 } }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Resources
          </Typography>
          <Box
            sx={{
              typography: "body2",
              color: "primary",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Link href="#" underline="hover" color="inherit">
              FAQ
            </Link>
            <Link href="#" underline="hover" color="inherit">
              Support
            </Link>
            <Link href="#" underline="hover" color="inherit">
              Privacy Policy
            </Link>
            <Link href="#" underline="hover" color="inherit">
              Terms and Conditions
            </Link>
          </Box>
        </Box>
        <Box sx={{ width: { xs: "100%", sm: "15%" } }}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Contact Us
          </Typography>
          <Typography variant="body2">
            Email: info@designagency.com <br />
            Phone: +1 234 567 890 <br />
            Address: 123 Design Street, <br /> Creative City, CA 12345
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          mt: "20px",
        }}
      >
        <Box sx={{ mx: "10px" }}>
          <Facebook />
        </Box>
        <Box sx={{ mx: "10px" }}>
          <X />
        </Box>
        <Box sx={{ mx: "10px" }}>
          <LinkedIn />
        </Box>
        <Box sx={{ mx: "10px" }}>
          <Instagram />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
