import React, { useEffect } from "react";
import type { Route } from "./+types/dashboard";
import { Outlet, redirect, useLoaderData, useNavigate } from "react-router";
import { Box, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { styled, useTheme } from '@mui/material/styles';
import { FaCalendar, FaInbox, FaStickyNote } from "react-icons/fa";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import { IoHome, IoPersonSharp, IoSettings } from "react-icons/io5";
import { FaRepeat } from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs";
import { darktheme } from "~/themes";


//a tsx for all the more secure parts of the app

const drawerWidth = 180;
const collapsedWidth = 60;


const drawerItems = [
  { name: "Home", icon: <IoHome />, path: "/dashboard" },
  { name: "Customers", icon: <IoPersonSharp />, path: "/customers" },
  { name: "Volume", icon: <IoPersonSharp />, path: "/pv" },
  { name: "Habits", icon: <FaRepeat />, path: "/habits" },
  { name: "KPI", icon: <BsGraphUpArrow />, path: "/kpi" },
  { name: "Calendar", icon: <FaCalendar />, path: "/calendar" },
  { name: "Notes", icon: <FaStickyNote />, path: "/notes" },
  { name: "Settings", icon: <IoSettings />, path: "/settings" },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Biz Backend" },
    { name: "description", content: "dashboard" },
  ];
}

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: open ? drawerWidth : collapsedWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.standard,
  }),
  "& .MuiDrawer-paper": {
    width: open ? drawerWidth : collapsedWidth,
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.standard,
    }),
  },
}));


function SideBar(){
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <List>
      {drawerItems.map((item) => (
        <ListItem key={item.name} disablePadding sx={{ display: "block" }}>
          <ListItemButton
            onClick={() => navigate(item.path)}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              {item.icon}
            </ListItemIcon>
            {open && <ListItemText primary={item.name} />}
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  return(
    <Drawer open={open} variant={"permanent"} onMouseOver={toggleDrawer(true)} onMouseLeave={toggleDrawer(false)}>
        {DrawerList}
    </Drawer>
  );
}


export default function DashboardLayout() {
  // const { user, notifications } = useLoaderData<typeof loader>();

  useEffect(()=>{
    console.log("Client Side")
  },[]);

  return (
    <ThemeProvider theme={darktheme}>
      <CssBaseline />
      <SideBar></SideBar>

      <Box sx={{marginLeft:"60px"}}>
        <Outlet />
      </Box>
    </ThemeProvider>
  );
}