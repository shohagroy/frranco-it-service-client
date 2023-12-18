import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import MainButton from "../ui/MainButton";
import HeadingText from "../ui/HeadingText";
import icon1 from "../assets/client-1.png";
import icon2 from "../assets/client-2.png";
import icon3 from "../assets/client-3.png";
import icon4 from "../assets/client-4.png";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const ClientsSection = () => {
  const clients = [
    {
      id: 1,
      title: "Using better UX to improve healthcare delivery",
      icon: icon1,
    },
    {
      id: 2,
      title: "Levelling up the end-user learning experience",
      icon: icon2,
    },
    {
      id: 3,
      title: "Redefining entertainment biz with next-level UX",
      icon: icon3,
    },
    {
      id: 4,
      title: "Using better UX to improve healthcare delivery",
      icon: icon4,
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ marginY: "50px" }}>
      <Box sx={{ padding: 0, textAlign: "center" }}>
        <Typography gutterBottom variant="subtitle1">
          Our clients
        </Typography>

        <HeadingText size={"30px"}>
          We have re-defined user experiences for over
        </HeadingText>

        <HeadingText size={"30px"}>
          <span style={{ color: "#3C50FC" }}>50+ clients.</span>
        </HeadingText>
      </Box>

      <Box sx={{ paddingY: "50px" }}>
        <Grid container spacing={2}>
          {clients?.map((item, i) => {
            const { icon, title } = item || {};
            return (
              <Grid
                sx={{
                  width: "100%",
                  height: "auto",
                }}
                key={i}
                item
                xs={6}
                md={3}
              >
                <Box
                  sx={{
                    border: "0.5px solid #42CCF9",
                    width: "100%",
                    height: "250px",
                    padding: "1rem",
                    "@media (min-width: 600px)": {
                      height: "320px",
                    },
                  }}
                  display="flex"
                  justifyContent={"space-between"}
                  flexDirection={"column"}
                >
                  <img
                    src={icon}
                    alt="icon"
                    style={{
                      height: "50px",
                      width: "120px",
                    }}
                  />

                  <div>
                    <ArrowOutwardIcon />
                    <Typography color={"text.secondary"} variant="subtitle2">
                      {title}
                    </Typography>
                  </div>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      <Box display="flex" justifyContent={"center"} alignItems={"center"}>
        <MainButton>View All</MainButton>
      </Box>
    </Container>
  );
};

export default ClientsSection;
