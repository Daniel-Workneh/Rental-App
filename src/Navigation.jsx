import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {
  Dashboard as DashboardIcon,
  LibraryBooks as LibraryBooksIcon,
  Person as PersonIcon,
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
  Extension as ExtensionIcon,
  SwapHoriz as SwapHorizIcon,
} from '@mui/icons-material';
import BookList from './books.jsx';
import Dashboard from './dashBoard.jsx';
import BookDropdown from './uploadNewBook/uploadBook.jsx';
import LogInPage from './login.jsx';
import SignUpAsOwner from './signupAsOwner.jsx';

const Notifications = () => <Typography>Notifications Page</Typography>;
const Settings = () => <Typography>Settings Page</Typography>;

const drawerWidth = 240;

const getTitleFromPath = (path) => {
  switch (path) {
    case '/':
      return 'Dashboard';
    case '/BookList':
      return 'BookList';
    case '/owners':
      return 'Owners';
    case '/BookDropdown':
      return 'BookDropdown';
    case '/notifications':
      return 'Notifications';
    case '/settings':
      return 'Settings';
    case '/login':
      return 'Login as Admin';
    default:
      return 'Dashboard';
  }
};

// Component for AppBar with dynamic title
function DynamicAppBar() {
  const location = useLocation();
  const title = getTitleFromPath(location.pathname);

  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px - 1rem )`,
        height: '3rem',
        ml: `${drawerWidth}px`,
        mr: '0.5rem',
        mt: '0.5rem',
        borderRadius: '15px',
        backgroundColor: ' ',
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
export default function PermanentDrawerLeft() {
  return (
    <Router>
      <Box sx={{ 
        display: 'flex', 
        width:'100%', 
        height: '100vh', 
        // ml: `calc(${drawerWidth}px + 0.5rem)`,
        // mt: '5%', 
        padding: 0,
        backgroundColor: 'lightgreen'
        }}
      >
        <CssBaseline />
        <DynamicAppBar />
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              backgroundColor: 'pink',
              color: 'white',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <Divider />
          <List>
            {[
              { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
              { text: 'BookList', icon: <LibraryBooksIcon />, path: '/BookList' },
              { text: 'Owners', icon: <PersonIcon />, path: '/owners' },
              { text: 'BookDropdown', icon: <ExtensionIcon />, path: '/BookDropdown' },
              { text: 'Notifications', icon: <NotificationsIcon />, path: '/notifications' },
              { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
              { text: 'Login as Admin', icon: <SwapHorizIcon />, path: '/login' }
            ].map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} to={item.path}>
                  <ListItemIcon sx={{ color: 'white' }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
           flexGrow: 1,
           display: 'flex', 
            width:`calc(100% - ${drawerWidth}px - 0.5rem)`, 
            height: `calc(100vh-4rem)`, 
            ml:'0.5rem',
            mt: '4rem', 
            padding: '0.1rem',
            backgroundColor: 'purple'
          }}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/BookList" element={<BookList />} />
            <Route path="/owners" element={<LogInPage />} />
            <Route path="/BookDropdown" element={<BookDropdown />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<SignUpAsOwner />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}
