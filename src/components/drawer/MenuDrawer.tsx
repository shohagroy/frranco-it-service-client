import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import {
  Facebook,
  YouTube,
  Instagram,
  Twitter,
  LinkedIn,
  ChevronRight,
  Close,
} from "@mui/icons-material";

const drawerWidth = 400;

const MenuDrawer = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) => {
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

  const DrawerHeader = styled("div")(({ theme }) => ({
    borderBottom: "1px solid white",
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  }));

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "100%",
          backgroundColor: "black",
          borderLeft: "1px solid white",
          "@media (min-width: 600px)": {
            width: drawerWidth,
          },
        },
      }}
      variant="persistent"
      anchor="right"
      open={open}
    >
      <Box
        sx={{
          display: "none",
          "@media (min-width: 600px)": {
            display: "block",
          },
        }}
      >
        <DrawerHeader>
          <IconButton
            sx={{ color: "text.primary" }}
            size={"large"}
            onClick={handleDrawerClose}
          >
            <ChevronRight />
          </IconButton>
        </DrawerHeader>
      </Box>

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{
          fontWeight: 600,
          fontSize: "30px",
          padding: "20px",
          "@media (min-width: 600px)": {
            display: "none",
          },
        }}
      >
        <img src="" alt="Logo." />

        <IconButton
          onClick={() => setOpen(!open)}
          size="large"
          color="primary"
          aria-label="close"
          sx={{
            color: "white",
          }}
        >
          <Close />
        </IconButton>
      </Box>

      <Divider />
      <List>
        {["Team", "Our services", "Work", "RFDD", "Blogs", "Contact"].map(
          (text) => (
            <ListItem
              sx={{
                padding: "10px",
              }}
              key={text}
            >
              <ListItemButton>
                <ListItemText
                  sx={{ textAlign: "center", fontWeight: "600" }}
                  primary={text}
                />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>

      <Box
        display={"flex"}
        justifyContent={"center"}
        sx={{
          fontWeight: 600,
          fontSize: "30px",
          paddingY: "50px",
        }}
      >
        {socialIcons?.map((item) => (
          <IconButton key={item?.name} sx={{ color: "text.primary" }}>
            {item?.icon}
          </IconButton>
        ))}
      </Box>
    </Drawer>
  );
};

export default MenuDrawer;
