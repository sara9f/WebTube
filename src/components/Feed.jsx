import React, { useState, useEffect } from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { Videos, SideBar } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos([]);
    console.log("Selected Category:", selectedCategory);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        console.log("API Response:", data);
        if (data.items) {
          setVideos(data.items);
        } else {
          console.error(
            "Received unexpected data format from YouTube API:",
            data
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching data from YouTube API:", error.message);
      });
  }, [selectedCategory]);

  const theme = useTheme();
  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" },
        background: theme.palette.primary.background,
        color: theme.palette.primary.mainText,
        height: "100%",
      }}
    >
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: "0", md: "2" },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: theme.palette.primary.subText }}
        >
          Copyright 2024
        </Typography>
      </Box>
      <Box height={"90vh"} flex="2">
        <Typography
          variant="h4"
          fontWeight={"bold"}
          m={2}
          sx={{ color: theme.palette.primary.mainText }}
        >
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
