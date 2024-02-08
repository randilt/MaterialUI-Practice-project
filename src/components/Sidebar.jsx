import {
  AccountBox,
  Drafts,
  Group,
  Home,
  Inbox,
  ModeNight,
  Person,
  Report,
  Settings,
  Store,
  Storefront,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";

export const Sidebar = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#groups">
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
        </ListItem>
      </List>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#store">
          <ListItemIcon>
            <Storefront />
          </ListItemIcon>
          <ListItemText primary="Marketplace" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#friends">
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary="Friends" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#settings">
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#profile">
          <ListItemIcon>
            <AccountBox />
          </ListItemIcon>
          <ListItemText primary="My Profile" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#bugs">
          <ListItemIcon>
            <Report />
          </ListItemIcon>
          <ListItemText primary="Report" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <ModeNight />
          </ListItemIcon>
          <Switch />
        </ListItemButton>
      </ListItem>
    </Box>
  );
};
