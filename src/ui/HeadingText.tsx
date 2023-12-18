import { Typography } from "@mui/material";
import { ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
  size: string;
};

const HeadingText = ({ children, size }: HeadingProps) => {
  return (
    <Typography gutterBottom variant="h1" sx={{ fontSize: size }}>
      {children}
    </Typography>
  );
};

export default HeadingText;
