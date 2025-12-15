import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#243A73", // azul UIDE
    },
    secondary: {
      main: "#8B0038", // vino
    },
  },
  shape: {
    borderRadius: 10,
  },
});

export default theme;
