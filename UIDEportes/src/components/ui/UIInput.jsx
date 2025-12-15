import { TextField } from "@mui/material";

const UIInput = ({ ...props }) => {
  return (
    <TextField
      fullWidth
      margin="normal"
      {...props}
    />
  );
};

export default UIInput;
