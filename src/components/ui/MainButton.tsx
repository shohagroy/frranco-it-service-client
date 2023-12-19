import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Stack, Button } from "@mui/material";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};
const MainButton = ({ children }: ButtonProps) => {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        sx={{
          background:
            "linear-gradient(90deg, #42D7F8 0%, #4282FE 65.1%, #3A40FB 100%)",
          borderRadius: "30px",
        }}
        size="large"
        variant="contained"
        endIcon={<ArrowForwardIcon />}
      >
        {children}
      </Button>
    </Stack>
  );
};

export default MainButton;
