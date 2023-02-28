const { createTheme } = require("@mui/material");

const theme = createTheme({
  palette: {
    primary: {
      main: "#1F75FE",
      light: "#B9D9EB",
    },
    secondary: {
      main: "#6050DC",
      light: "#CCCCFF",
    },
    redColor: "#FF0800",
  },
});

export default theme;
