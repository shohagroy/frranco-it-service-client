import { Box, Container, Fab, Typography } from "@mui/material";
import BG from "../../assets/hero-bg.png";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const HeroSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BG})`,
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Box>
            <Typography
              gutterBottom
              variant="h1"
              sx={{
                textAlign: "center",
                fontSize: "45px",
                fontWeight: 500,
                "@media (min-width: 600px)": {
                  fontSize: "60px",
                  textAlign: "left",
                },
              }}
            >
              Frranco<span style={{ color: "#4282FE" }}>.</span> IT Service
              Provider<span style={{ color: "#4282FE" }}>.</span>
            </Typography>

            <Box
              sx={{
                borderLeft: "2px solid #F4F4F4",
                maxWidth: "400px",
                margin: "auto",
              }}
            >
              <Typography color="text.secondary" sx={{ paddingLeft: "10px" }}>
                <span style={{ color: "#4282FE" }}>Frranco</span> is a IT
                company dealing in design and development from the last 1 year.
                Excelling in 2 dept. UI/UX Design and Development.
              </Typography>
            </Box>
          </Box>

          <Fab
            color="primary"
            aria-label="scroll down"
            sx={{
              position: "absolute",
              right: "50px",
              bottom: "50px",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ArrowDownwardIcon />
          </Fab>
        </Box>
      </Container>
    </div>
  );
};

export default HeroSection;
