import { Box, Container, Typography, Button } from "@mui/material";

const WorkWithSection = () => {
  return (
    <Container maxWidth="lg" sx={{ position: "relative" }}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"start"}
        flexDirection={"column"}
        sx={{
          height: "250px",
          borderRadius: "10px",
          background:
            "linear-gradient(90deg, #42D7F8 0%, #4282FE 52.98%, #262DFB 100%)",
          padding: "20px",
          "@media (min-width: 600px)": {
            padding: "50px",
            borderRadius: "30px",
            height: "300px",
          },
        }}
      >
        <Typography sx={{ color: "text.primary" }} gutterBottom>
          WORK WITH US
        </Typography>

        <Typography
          sx={{
            color: "text.primary",
            fontSize: "30px",
            fontWeight: "600",
            "@media (min-width: 600px)": {
              fontSize: "45px",
            },
          }}
          variant="h1"
          gutterBottom
        >
          We’d love to get to know you.
        </Typography>

        <Button
          sx={{
            borderRadius: "30px",
            bgcolor: "text.primary",
          }}
          size="large"
          variant="contained"
        >
          <Typography
            sx={{
              background:
                "linear-gradient(90deg, #42D7F8 0%, #4282FE 65.1%, #3A40FB 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontWeight: "600",
            }}
          >
            Get in touch
          </Typography>
        </Button>
      </Box>
    </Container>
  );
};

export default WorkWithSection;
