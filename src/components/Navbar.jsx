import { Stack, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';




const Navbar = ({ onToggleLightMode }) => {
  const theme = useTheme();

  return (
    <Stack direction="row" alignItems="center" p={2} sx={{ position: "sticky", background: theme.palette.primary.background, top: 0, justifyContent: "space-between" }}>
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <Stack direction="row" style={{ display: "flex", alignItems: "center" }}>
        <SearchBar />
        <IconButton
          sx={{
            color: theme.palette.primary.mainText,
            display: "flex",
            alignItems: "end",
            
          }}
          aria-label="light mood"
          onClick={onToggleLightMode}
        >
          {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
          
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Navbar;
