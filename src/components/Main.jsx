import { Box } from "@mui/material";
import React from "react";
import CardBox from "./CardBox";

const Main = () => {
  return (
    <Box
      flex={4}
      p={2}
    >
      <CardBox />
      <CardBox />
      <CardBox />
      <CardBox />
    </Box>
  );
};

export default Main;
