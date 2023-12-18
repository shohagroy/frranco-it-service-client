import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import img1 from "../assets/project-1.png";
import img2 from "../assets/project-2.png";
import img3 from "../assets/project-3.png";
import img4 from "../assets/project-4.png";
import MainButton from "../ui/MainButton";

const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      tittle: "Night googles by Mindchatter",
      subTittle: "Website design, Art direction, Development",
      img: img1,
    },
    {
      id: 1,
      tittle: "Night googles by Mindchatter",
      subTittle: "Website design, Art direction, Development",
      img: img2,
    },
    {
      id: 1,
      tittle: "Night googles by Mindchatter",
      subTittle: "Website design, Art direction, Development",
      img: img3,
    },
    {
      id: 1,
      tittle: "Night googles by Mindchatter",
      subTittle: "Website design, Art direction, Development",
      img: img4,
    },
  ];

  return (
    <>
      <Container maxWidth="lg" sx={{ marginTop: "100px" }}>
        <Typography gutterBottom variant="subtitle1" sx={{ padding: 0 }}>
          Flagship projects
        </Typography>

        <Box sx={{ paddingY: "50px" }}>
          <Grid container spacing={6}>
            {projects?.map((item, i) => {
              const { img, tittle, subTittle } = item || {};
              return (
                <Grid
                  sx={{
                    width: "100%",
                    height: "auto",
                    "@media (min-width: 600px)": {
                      width: "50%",
                      height: "706.5px",
                      marginTop: i % 2 === 1 ? "100px" : "0px",
                    },
                  }}
                  key={i}
                  item
                  xs={12}
                  md={6}
                >
                  <Card>
                    <CardMedia
                      component="img"
                      height="550px"
                      image={img}
                      alt={tittle}
                    />
                    <CardContent sx={{ bgcolor: "black" }}>
                      <Typography
                        gutterBottom
                        sx={{
                          fontSize: "16px",
                          fontWeight: "500",
                          "@media (min-width: 600px)": {
                            fontSize: "20px",
                          },
                        }}
                        variant="subtitle1"
                        color="text.primary"
                      >
                        {tittle}
                      </Typography>

                      <Typography
                        variant="subtitle2"
                        color="text.secondary"
                        sx={{
                          fontSize: "10px",
                          "@media (min-width: 600px)": {
                            fontSize: "13px",
                          },
                        }}
                      >
                        {subTittle}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>

          <MainButton>View All</MainButton>
        </Box>
      </Container>
    </>
  );
};

export default ProjectSection;