import React from "react";
import { Box, Button, Link } from "@mui/material";
import ContactUs from "../../pages/ContactUs/ContactUs.js";

const Header = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        pt: "20px",
        pb: "20px",
      }}
    >
      <Box
        sx={{
          width: "70%",
          pl: "50px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Link href="#" underline="none" color="inherit">
          Pixel.com
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "30%",
          pr: "50px",
        }}
      >
        <Box>
          <Link href="#" underline="none" color="inherit">
            Home
          </Link>
        </Box>
        <Box>
          <Link href="#" underline="none" color="inherit">
            About Us
          </Link>
        </Box>
        <Box>
          <Link href="#" underline="none" color="inherit">
            Services
          </Link>
        </Box>
        <Box>
          <Button
            sx={{
              color: "white",
              backgroundColor: "#7209B7",
              borderRadius: "10px",
              width: "120px",
            }}
          >
            <Link href={ContactUs} underline="none" color="inherit">
              Contact Us
            </Link>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
