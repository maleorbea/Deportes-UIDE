import { Divider } from "@mui/material";

const UIDivider = ({ text }) => {
  return (
    <Divider sx={{ my: 2 }}>
      {text}
    </Divider>
  );
};

export default UIDivider;
