import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Box, AppBar as MuiAppBar, Toolbar, CssBaseline } from "@mui/material";

import { Search as SearchIcon } from "@mui/icons-material";

import CNavbar from "../../common/components/layout/CNavbar";
import CInput from "../../common/components/controls/CInput/CInput";
import CButton from "../../common/components/controls/CButton/CButton";
import CTable from "../../common/components/layout/CTable";

const drawerWidth = 320;
const drawerWidthSmall = 100;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: `calc(100% - ${drawerWidthSmall}px)`,
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Home = () => {
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box className="home" sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar className="home__search">
          <Box>
            <CInput placeholder="Tìm tất cả ..." type="text" />
            <CButton>
              <SearchIcon />
            </CButton>
          </Box>
        </Toolbar>
      </AppBar>
      <CNavbar
        open={open}
        handleDrawerClose={handleDrawerClose}
        handleDrawerOpen={handleDrawerOpen}
      />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        <Box className="home__content__page">
          <CTable></CTable>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
