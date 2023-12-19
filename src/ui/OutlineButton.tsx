import { Button } from "@mui/material";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};
const OutlineButton = ({ children }: ButtonProps) => {
  return (
    <Button
      sx={{
        borderRadius: "30px",
      }}
      color="secondary"
      size="large"
      variant="outlined"
    >
      {children}
    </Button>
  );
};

export default OutlineButton;
