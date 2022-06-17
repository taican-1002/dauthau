import React from 'react'
import CMenu from './CMenu'

import { styled, useTheme } from "@mui/material/styles";

import {
    Drawer as MuiDrawer,
    Typography,
    IconButton,
} from "@mui/material";

import {
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon,
} from "@mui/icons-material"

import Logo from "../../assets/image/logovtco.png"


const drawerWidth = 240;
const drawerWidthSmall = 150;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });
  
  const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${drawerWidthSmall}px + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${drawerWidthSmall}px + 1px)`,
    },
  });

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

function CNavbar(props) {

    const theme = useTheme();

  return (
    <>
      <Drawer variant="permanent" open={props.open}>
        <DrawerHeader>
        <img src={Logo} alt="" />
          <IconButton onClick={props.handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        {/* <Divider /> */}
        <CMenu open={props.open}/>
      </Drawer>
    </>
  )
}

export default CNavbar