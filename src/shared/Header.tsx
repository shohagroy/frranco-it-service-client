import { Box, Container, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import MenuDrawer from "../components/drawer/MenuDrawer";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        width: "100%",
        position: "absolute",
        left: 0,
        top: 0,
      }}
    >
      <Container maxWidth="xl">
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{
            fontWeight: 600,
            fontSize: "30px",
            paddingY: "10px",
            "@media (min-width: 600px)": {
              paddingY: "50px",
            },
          }}
        >
          <img src="" alt="Logo." />

          <IconButton
            onClick={() => setMenuOpen(!menuOpen)}
            size="large"
            color="primary"
            aria-label="menu"
            sx={{
              color: "white",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Container>

      <MenuDrawer open={menuOpen} setOpen={setMenuOpen} />
    </nav>
  );
};

export default Header;
