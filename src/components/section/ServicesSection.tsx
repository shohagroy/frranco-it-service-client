import { Box, Container, Grid, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import OutlineButton from "../button/OutlineButton";
import EventBG from "../../assets/event-bg.png";
import MainButton from "../button/MainButton";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "UI/UX Design",
      subTitle:
        "We provide end to end research services while discovering game-changing improvement opportunities.",
      buttons: ["Mobile App Design", "Responsive Website", "Design system"],
    },
    {
      id: 2,
      title: "Website Design",
      subTitle:
        "We provide end to end research services while discovering game-changing improvement opportunities.",
      buttons: ["Mobile App Design", "Responsive Website", "Design system"],
    },
    {
      id: 3,
      title: "Development",
      subTitle:
        "We provide end to end research services while discovering game-changing improvement opportunities.",
      buttons: ["Mobile App Design", "Responsive Website", "Design system"],
    },
  ];

  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            width: "100%",
            paddingY: "50px",
            "@media (min-width: 600px)": {
              width: "850px",
            },
          }}
        >
          <Typography
            sx={{
              mb: "10px",
              "@media (min-width: 600px)": {
                mb: "50px",
              },
            }}
            gutterBottom
            variant="subtitle1"
          >
            Our services{" "}
          </Typography>

          <Typography
            gutterBottom
            variant="h1"
            sx={{
              fontSize: "30px",
              my: "16px",
              "@media (min-width: 600px)": {
                fontSize: "70px",
                my: "50px",
              },
            }}
          >
            We offer worthwhile experiences that help you go{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #42D7F8 0%, #4282FE 65.1%, #3A40FB 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              above & beyond{" "}
            </span>{" "}
            and guide your business to drive impact.
          </Typography>
        </Box>

        <Box>
          {services?.map((item, i) => {
            const { title, subTitle, buttons } = item || {};
            return (
              <Grid
                sx={{
                  py: "30px",
                  "@media (min-width: 600px)": {
                    py: "70",
                  },
                }}
                key={i}
                container
                spacing={4}
              >
                <Grid
                  sx={{
                    width: "100%",
                    height: "auto",
                  }}
                  item
                  xs={12}
                  md={6}
                >
                  <Box
                    display="flex"
                    justifyContent={"start"}
                    alignItems={"center"}
                  >
                    <Typography
                      sx={{
                        fontSize: "20px",
                        "@media (min-width: 600px)": {
                          fontSize: "60px",
                        },
                      }}
                      color={"text.primary"}
                      variant="h2"
                    >
                      {title}
                    </Typography>
                    <ArrowForwardIcon
                      color="primary"
                      sx={{
                        fontSize: "20px",
                        marginLeft: "5",
                        "@media (min-width: 600px)": {
                          fontSize: "50px",
                          marginLeft: "10px",
                        },
                      }}
                    />
                  </Box>
                </Grid>

                <Grid
                  sx={{
                    width: "100%",
                    height: "auto",
                  }}
                  item
                  xs={12}
                  md={6}
                >
                  <Box
                    display="flex"
                    justifyContent={"space-between"}
                    flexDirection={"column"}
                    sx={{
                      paddingX: "0px",
                      "@media (min-width: 600px)": {
                        paddingX: "50px",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        mb: "10px",
                        "@media (min-width: 600px)": {
                          mb: "50px",
                        },
                      }}
                      gutterBottom
                      color={"text.secondary"}
                      variant="subtitle1"
                    >
                      {subTitle}
                    </Typography>

                    <Box sx={{ "& button": { m: 1 } }}>
                      {buttons?.map((button) => (
                        <OutlineButton key={button}>{button}</OutlineButton>
                      ))}
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            );
          })}
        </Box>
      </Container>

      <Box
        sx={{
          background: `url(${EventBG})`,
          backgroundRepeat: "no-repeat",
          height: "230px",
          width: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          "@media (min-width: 600px)": {
            height: "850px",
          },
        }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <MainButton>Watch showreel</MainButton>
      </Box>

      {/* <Box
        sx={{
          mt: "100px",
          background: `url(${GroupBg})`,
          backgroundRepeat: "no-repeat",
          height: "230px",
          width: "100%",
          backgroundPosition: "right",
          backgroundSize: "contain",
          "@media (min-width: 600px)": {
            height: "900px",
            backgroundSize: "cover",
          },
        }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              width: "100%",
              py: "50px",
              "@media (min-width: 600px)": {
                height: "900px",
              },
            }}
          >
            <HeadingText size="45px">
              Franco gives you on demand access to the talented pool of top-tier
              developers & designers
            </HeadingText>
          </Box>
          <MainButton>Start 3 day free trial</MainButton>

          <Button>NO PAYMENT. NO RISKS</Button>
        </Container>
      </Box> */}
    </>
  );
};

export default ServicesSection;
