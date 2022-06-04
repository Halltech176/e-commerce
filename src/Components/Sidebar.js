import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
// import { useState } from "react";
import {
  MdHome,
  MdPages,
  MdPeople,
  MdPlace,
  MdPerson,
  MdPersonSearch,
  MdSettings,
} from "react-icons/md";
import { BsMoonFill } from "react-icons/bs";
const Sidebar = ({ mode, setMode, barOpen, setbarOpen }) => {
  // const [BarOpen, setBarOpen] = useState('none');
  return (
    <Box
    position ='relative'
      // display = {barOpen}
      flex={1}
      transitionProperty = 'display'
      transitionDelay = '0.2'
      transitionTimingFunction ='ease-in-out'
      color = 'white'
      zIndex = {1}
      sx={{ display: { xs: barOpen, sm: "block" } }}
      p={2}
    >
      <Box position="fixed" bgcolor ='blue'>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <MdHome />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <MdPages />
              </ListItemIcon>
              <ListItemText primary="Page" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <MdPeople />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <MdPlace />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <MdPerson />
              </ListItemIcon>
              <ListItemText primary="Person" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <MdSettings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <MdPersonSearch />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <BsMoonFill />
              </ListItemIcon>
              <Switch
                onChange={() => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
export default Sidebar;
