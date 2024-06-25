import React from "react";
import { Box, Typography } from "@mui/material";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form";
const ContactUs = () => {
  return (
    <Box>
      <Box>
        <Header />
      </Box>
      <Box>
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "#7209B7",
              p: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Contact Us
          </Typography>
          <Typography
            varient="p"
            sx={{
              fontWeight: "bold",
              color: "secondary",
              paddingLeft: "100px",
              // display: "flex",
              // alignItems: "center",
              // justifyContent: "center",
            }}
          >
            We'd love to hear from you! <br />
            Whether you have a question about our services, pricing, or anything
            else, our team is ready to answer all your questions.
          </Typography>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              p: "60px",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "semibold",
                color: "#7209B7",
                p: "20px",
              }}
            >
              Get in Touch
            </Typography>

            <Typography variant="body2">
              Email: info@designagency.com <br />
              Phone: +1 234 567 890 <br />
              Address: 123 Design Street, Creative City, CA 12345
            </Typography>
            <Typography variant="body2">
              Office Hours : <br />
              Monday - Friday: 9:00 AM - 6:00 PM <br />
              Saturday: 10:00 AM - 4:00 PM <br />
              Sunday: Closed
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* <Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "semibold",
            color: "#7209B7",
            pl: "100px",
          }}
        >
          Send Us a Message
        </Typography>
        <Typography
          variant="body2"
          paddingLeft="100px"
          paddingTop="20px"
          paddingBottom="20px "
        >
          If you prefer, you can send us a message using the form below, and we
          will get back to you as soon as possible
        </Typography>
      </Box> */}
      <Box sx={{ pl: "100px" }}>
        <Form />
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default ContactUs;
