import React, { useEffect } from "react";
import type { Route } from "./+types/dashboard";
import { Outlet, redirect, useLoaderData } from "react-router";
import { Box, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { styled, useTheme } from '@mui/material/styles';
import { FaInbox } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';


//a tsx for all the more secure parts of the app

const drawerWidth = 240;
const collapsedWidth = 60;

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

//theme for the whole webpage to use
export const darktheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#90caf9"},
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
  },
});


function SideBar(){
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <List>
      {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
        <ListItem key={text} disablePadding sx={{ display: "block" }}>
          <ListItemButton
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
              {index % 2 === 0 ? <FaInbox /> : <CiMail />}
            </ListItemIcon>
            {open && <ListItemText primary={text} />}
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

      <main>
        <Outlet />
      </main>
    </ThemeProvider>
  );
}