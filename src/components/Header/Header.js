import React from "react";
import { Box, Button } from "@mui/material";
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
        sx={{ width: "70%", pl: "50px", display: "flex", alignItems: "center" }}
      >
        Digi.com
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
        <Box>Home</Box>
        <Box>About Us</Box>
        <Box>Services</Box>
        <Box>
          <Button
            sx={{
              color: "white",
              backgroundColor: "#7209B7",
              borderRadius: "10px",
              width: "120px"
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
