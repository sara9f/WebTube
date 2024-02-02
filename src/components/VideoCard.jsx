import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia , useTheme} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  const theme = useTheme();
  return(
  <Card
    sx={{
      width: { xs: "100%",  sm: '358px', md: "320px",  }, // Adjust the width based on screen size
      
      boxShadow: "none",
      borderRadius: 0,
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
      <CardMedia
        component="img" 
        image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        alt={snippet?.title}
        sx={{
          width: "100%",
          height: "auto", 
        }}
      />
    </Link>
    <CardContent
      sx={{
        backgroundColor: theme.palette.primary.card,
        height: "106px",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography variant="subtitle1" fontWeight="bold" color={theme.palette.primary.mainText}>
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link
        to={
          snippet?.channelId
            ? `/channel/${snippet?.channelId}`
            : demoChannelUrl
        }
      >
        <Typography variant="subtitle2" color={theme.palette.primary.subText}>
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon
            sx={{ fontSize: "12px", color: theme.palette.primary.subText, ml: "5px" }}
          />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);}

export default VideoCard;
