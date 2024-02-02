import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";

import { ThemeProvider, createTheme } from "@mui/material/styles";


  const App = () => {

  const [mode, setMode] = useState("dark");

  const toggleLightMode = () => {
    setMode((myMode) => (myMode === "dark" ? "light" : "dark"));
    // {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
  }
  
  return (
    <BrowserRouter>
      <ThemeProvider theme={createTheme({
        palette: {
          mode: mode,
          primary: {
            main: "#000",
            background: mode === 'dark' ? '#000' : '#fff',
            mainText: mode === 'dark' ? "#fff" : "#000",
            subText: mode === 'dark' ? "gray" : "#636363",
            card: mode === 'dark' ? "#1E1E1E" : "#F0F0F0",
          },
        },
      })}>
        <Box
          sx={{ 
          height: '100vh', overflow: 'hidden', overflowY: 'auto' ,
          background:mode === 'dark' ? '#000' : '#fff'
        }}
        >
          <Navbar onToggleLightMode={toggleLightMode} />
          <Routes>
            <Route exact path="/" element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
