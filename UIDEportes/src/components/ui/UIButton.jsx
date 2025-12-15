import { Button } from "@mui/material";

const UIButton = ({ children, ...props }) => {
  return (
    <Button
      fullWidth
      variant="contained"
      {...props}
      sx={{
        textTransform: "none",
        py: 1.2,
        ...props.sx,
      }}
    >
      {children}
    </Button>
  );
};

export default UIButton;
