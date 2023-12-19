import { Box, Container, Grid, Typography, Button } from "@mui/material";
import Img from "../../assets/image-1.png";
import Quotes from "../../assets/double-quotes.png";
import Carousel from "react-material-ui-carousel";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const TestimonialsSection = () => {
  return (
    <Container maxWidth="lg" sx={{ position: "relative" }}>
      <Box sx={{ paddingY: "50px" }}>
        <Typography
          sx={{
            "@media (min-width: 600px)": {
              mb: "50px",
            },
          }}
          gutterBottom
          variant="subtitle1"
        >
          Testimonials
        </Typography>

        <Carousel
          NavButton={({ onClick, next, prev }) => {
            return (
              <Button
                onClick={() => onClick()}
                style={
                  next
                    ? {
                        color: "white",
                        width: "50px",
                        height: "50px",
                        position: "absolute",
                        backgroundColor: "#4282FE",
                        bottom: "0px",
                        right: "0px",
                      }
                    : {
                        color: "white",
                        width: "50px",
                        height: "50px",
                        position: "absolute",
                        backgroundColor: "#4282FE",
                        bottom: "0px",
                        left: "0px",
                      }
                }
              >
                {next && <ArrowForwardIosIcon />}
                {prev && <ArrowBackIosIcon />}
              </Button>
            );
          }}
        >
          {[...Array(10)].map((_, i) => (
            <Box
              key={i}
              display="flex"
              justifyContent={"center"}
              sx={{ paddingTop: "100px" }}
            >
              <Grid
                sx={{
                  width: "100%",
                  "@media (min-width: 600px)": {
                    width: "850px",
                  },
                }}
                container
                spacing={4}
              >
                <Grid
                  sx={{
                    width: "100%",
                  }}
                  item
                  xs={12}
                  md={6}
                >
                  <Box
                    display={"flex"}
                    justifyContent={"end"}
                    sx={{
                      bgcolor: "secondary.main",
                      width: "100%",
                      height: "300px",
                      position: "relative",
                      "@media (min-width: 600px)": {
                        width: "360px",
                      },
                    }}
                  >
                    <img
                      style={{
                        width: "350px",
                        height: "420px",
                        transform: "rotateY(180deg)",
                        position: "absolute",
                        bottom: "0px",
                        right: "0px",
                      }}
                      src={Img}
                      alt="image"
                    />
                  </Box>
                </Grid>

                <Grid
                  sx={{
                    width: "100%",
                  }}
                  item
                  xs={12}
                  md={6}
                >
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    flexDirection={"column"}
                    sx={{
                      position: "relative",
                      "@media (min-width: 600px)": {
                        height: "250px",
                        width: "500px",
                      },
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: "20px",
                        fontWeight: "800",
                        paddingY: "20px",
                      }}
                    >
                      SAKSHI VERMA
                    </Typography>

                    <Box sx={{ paddingBottom: "20px" }}>
                      <img src={Quotes} alt="Quotes" />
                      <Typography variant="subtitle1">
                        In voluptates iste soluta veniam beatae sed ipsa quos
                        numquam. Perferendis eos similique sunt temporibus.
                        Tempore rem libero deleniti adipisci nulla.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Carousel>
        <Box sx={{ paddingTop: "10px" }} display={"flex"} alignItems={"end"}>
          <Typography sx={{ fontSize: "50px" }} variant="h2">
            01
          </Typography>
          <Typography
            sx={{ paddingBottom: "5px", color: "secondary.main" }}
            variant="subtitle1"
          >
            /04
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default TestimonialsSection;
