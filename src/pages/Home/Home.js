import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Header from "../../components/Header/Header";
import ImgMediaCard from "../../components/ImgMediaCard";
import heroimg from "../../assets/heroimg.png";
import webimg from "../../assets/webimg.jpg";
import ecommerceimg from "../../assets/ecommerce.jpg";
import brandimg from "../../assets/brandimg.jpg";
import seoimg from "../../assets/seoimg.jpg";
import mobapp from "../../assets/mobapp.jpg";
import socialmedia from "../../assets/socialmedia.jpg";
import bodyimg from "../../assets/bodyimg.jpg";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <Box>
      <Box>
        <Header />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: "40px",
          marginLeft: "50px",
          marginRight: "50px",
        }}
      >
        <Box sx={{ width: "50%" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              color: "#7209B7",
            }}
          >
            <Box component="span" sx={{ color: "#F72585" }}>
              Build
            </Box>
            Your Dream <br /> Website with <br /> Design
            <Box component="span" sx={{ color: "#F72585" }}>
              Agency
            </Box>
          </Typography>
          <Typography>
            <Box sx={{ pt: "30px", pb: "30px" }}>
              lorem ipsum dolor sit amet, consectetur adip incididunt ut labore
              et dolore magna aliqu lorem ipsum d Lorem ipsum dolor sit amet,
              consectetur adip incididunt ut labore et dolore magna aliqu lore m
              nibh.
            </Box>
          </Typography>
          <Box>
            <Button
              sx={{
                color: "white",
                backgroundColor: "#7209B7",
                borderRadius: "10px",
                width: "120px",
                m: "10px",
              }}
            >
              GET STARTED{" "}
            </Button>
            <Button
              sx={{
                color: "white",
                backgroundColor: "#7209B7",
                borderRadius: "10px",
                width: "120px",
              }}
            >
              LIVE DEMO{" "}
            </Button>
          </Box>
        </Box>
        <Box
          component="img"
          src={heroimg}
          alt="Hero Image"
          sx={{
            width: "100%",
            maxWidth: "400px",
            height: "auto",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          margin: "100px",
        }}
      >
        <ImgMediaCard
          heading="Custom Web Design"
          content="Our expert designers create stunning, responsive websites tailored to your brand's unique identity. From concept to launch, we ensure your site looks great on all devices."
          image={webimg}
        />
        <ImgMediaCard
          heading="E-Commerce Solutions"
          content="Boost your online sales with our comprehensive e-commerce solutions. We build secure, user-friendly online stores that provide a seamless shopping experience for your customers."
          image={ecommerceimg}
        />
        <ImgMediaCard
          heading="Branding & Identity"
          content="Establish a strong brand presence with our branding and identity services. We help you create a cohesive visual identity that resonates with your target audience"
          image={brandimg}
        />
        <ImgMediaCard
          heading="SEO Optimization"
          content="Increase your online visibility and drive more traffic to your site with our SEO services. We implement effective strategies to improve your search engine rankings and attract potential customers."
          image={seoimg}
        />
        <ImgMediaCard
          heading="Mobile App Development"
          content="Bring your ideas to life with our custom mobile app development services. We design and develop apps for both iOS and Android, providing a seamless user experience and advanced functionality."
          image={mobapp}
        />
        <ImgMediaCard
          heading="Social Media Marketing"
          content="Expand your reach and build a loyal following with our social media marketing services. We create and manage effective campaigns across various platforms to promote your brand and engage with your audience."
          image={socialmedia}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: "40px",
          marginLeft: "50px",
          marginRight: "50px",
        }}
      >
        <Box sx={{ width: "50%" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              color: "#7209B7",
            }}
          >
            Grow Your <br /> Bussiness <br /> With Our Agency
          </Typography>
          <Typography>
            <Box sx={{ pt: "30px", pb: "30px" }}>
              lorem ipsum dolor sit amet, consectetur adip incididunt ut labore
              et dolore magna aliqu lorem ipsum d Lorem ipsum dolor sit amet,
              consectetur adip incididunt ut labore et dolore magna aliqu lore m
              nibh.
            </Box>
          </Typography>
          <Box>
            <Button
              sx={{
                color: "white",
                backgroundColor: "#7209B7",
                borderRadius: "10px",
                width: "120px",
                m: "10px",
              }}
            >
              GET STARTED{" "}
            </Button>
          </Box>
        </Box>
        <Box
          component="img"
          src={bodyimg}
          alt="Body Image"
          sx={{
            width: "100%",
            maxWidth: "400px",
            height: "auto",
          }}
        />
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
