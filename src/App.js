import "./styles/app.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import { Box, createTheme, Stack } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import AddBtn from "./components/AddBtn";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Box
          bgcolor={"background.default"}
          color={"text.primary"}
        >
          <Header />
          <Stack
            direction={"row"}
            spacing={2}
            justifyContent={"space-between"}
            bgcolor={"background.default"}
            color={"text.primary"}
          >
            <Navigation
              mode={mode}
              setMode={setMode}
            />
            <Main />
            <Sidebar />
          </Stack>
          <AddBtn mode={mode} />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
