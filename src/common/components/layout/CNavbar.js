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

import Logo from "../../assets/images/logovtco.png"


const drawerWidth = 320;
const drawerWidthSmall = 100;

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
      <Drawer className='navbar'
       variant="permanent" 
       open={props.open}
      >
        <IconButton className='navbar__buton__toggle' onClick={()=>{props.open?props.handleDrawerClose():props.handleDrawerOpen()}}>
          {props.open ? (
              <ChevronLeftIcon />
              ) : (
              <ChevronRightIcon />
          )}
        </IconButton>
        <DrawerHeader
          className='navbar__header'
          sx={{padding: props.open ? '0 39px' : '0' }} 
        >
          <img src={Logo} alt="" />
        </DrawerHeader>
        <CMenu open={props.open}/>
      </Drawer>
    </>
  )
}

export default CNavbar