import { Box, Button, Container, Grid, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";

import {
  Facebook,
  YouTube,
  Instagram,
  Twitter,
  LinkedIn,
} from "@mui/icons-material";

const Footer = () => {
  const socialIcons = [
    {
      name: "youtube",
      link: "/",
      icon: <YouTube />,
    },
    {
      name: "linkedin",
      link: "/",
      icon: <LinkedIn />,
    },
    {
      name: "instagram",
      link: "/",
      icon: <Instagram />,
    },
    {
      name: "twitter",
      link: "/",
      icon: <Twitter />,
    },
    {
      name: "facebook",
      link: "/",
      icon: <Facebook />,
    },
  ];

  const companyArray = [
    {
      name: "The Team",
      link: "/",
    },
    {
      name: "Work",
      link: "/",
    },
    {
      name: "Services",
      link: "/",
    },
    {
      name: "Contact Us",
      link: "/",
    },
  ];
  return (
    <Container maxWidth="lg">
      <Box>
        <Box sx={{ fontWeight: 600, fontSize: "30px", paddingY: "50px" }}>
          <img src="" alt="Logo." />
        </Box>
        <Grid container spacing={6}>
          <Grid
            sx={{
              width: "100%",
              "@media (min-width: 600px)": {},
            }}
            item
            xs={12}
            md={6}
          >
            <Box>
              <Typography
                gutterBottom
                variant="h4"
                sx={{ fontSize: "16px", fontWeight: 600 }}
                color={"primary.main"}
              >
                Lorem ipsum dolor sit
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{ fontSize: "16px" }}
                color={"text.main"}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa.
              </Typography>
            </Box>
          </Grid>

          <Grid
            sx={{
              width: "100%",
              "@media (min-width: 600px)": {},
            }}
            item
            xs={12}
            md={3}
          >
            <Box>
              <Box
                display={"flex"}
                justifyContent={"start"}
                alignItems={"center"}
                sx={{ paddingY: "10px" }}
              >
                <LocationOnOutlinedIcon />
                <Typography sx={{ paddingX: "10px" }}>
                  998 Devonshire Ave.Camp Hill, PA 17011
                </Typography>
              </Box>

              <Box
                display={"flex"}
                justifyContent={"start"}
                alignContent={"start"}
                sx={{ paddingY: "10px" }}
              >
                <EmailOutlinedIcon />
                <Typography sx={{ paddingX: "10px" }}>
                  haddawy@comcast.net
                </Typography>
              </Box>

              <Box
                display={"flex"}
                justifyContent={"start"}
                alignContent={"start"}
                sx={{ paddingY: "10px" }}
              >
                <PhoneInTalkOutlinedIcon />
                <Typography sx={{ paddingX: "10px" }}>
                  (334) 202-4792
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid
            sx={{
              width: "100%",
              "@media (min-width: 600px)": {},
            }}
            item
            xs={12}
            md={3}
          >
            <Box>
              <Typography
                gutterBottom
                variant="h4"
                sx={{ fontSize: "16px", fontWeight: "600" }}
                color={"primary.main"}
              >
                Company
              </Typography>
              {companyArray?.map((item, i) => (
                <Typography
                  key={i}
                  variant="subtitle1"
                  sx={{
                    fontSize: "16px",
                    paddingTop: "10px",
                    fontWeight: "500",
                  }}
                  color={"text.main"}
                >
                  {item?.name}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ fontWeight: 600, fontSize: "30px" }}>
          {socialIcons?.map((item) => (
            <Button
              key={item?.name}
              variant="text"
              sx={{ color: "text.primary" }}
            >
              {item?.icon}
            </Button>
          ))}
        </Box>

        <Box
          display="flex"
          justifyContent={"space-between"}
          alignItems={"center"}
          flexDirection={"column"}
          sx={{
            paddingY: "20px",
            "@media (min-width: 600px)": {
              flexDirection: "row",
            },
          }}
        >
          <Typography>©2023 FrrancoIT.com</Typography>
          <Typography>Privacy policy | Terms of service</Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
