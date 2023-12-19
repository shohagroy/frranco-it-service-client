import { Box, Container, Typography } from "@mui/material";
import HeadingText from "./ui/HeadingText";

const HeroSection = () => {
  return (
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
          <HeadingText size={"60px"}>
            Frranco. IT Service Provider.{" "}
          </HeadingText>
          <Box
            sx={{
              borderLeft: "2px solid #F4F4F4",
              maxWidth: "400px",
              margin: "auto",
            }}
          >
            <Typography color="text.secondary" sx={{ paddingLeft: "10px" }}>
              Frranco is a IT company dealing in design and development from the
              last 1 year. Excelling in 2 dept. UI/UX Design and Development.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            width: "200px",
            height: "200px",
            bgcolor: "white",
            position: "absolute",
            right: "10px",
            bottom: "10px",
          }}
        ></Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
