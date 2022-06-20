import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
<<<<<<< HEAD
import { Box, AppBar as MuiAppBar, Toolbar, CssBaseline } from "@mui/material";

import { Search as SearchIcon } from "@mui/icons-material";

=======
import {Box, CssBaseline} from "@mui/material";

import CPagination from "../../common/components/controls/CPagination/CPagination";
>>>>>>> b79d6da26b14da63ae22be64478dab4f91907202
import CNavbar from "../../common/components/layout/CNavbar";
import CTable from "../../common/components/layout/CTable";
import CHeader from "../../common/components/layout/CHeader";

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

const Home = () => {
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
<<<<<<< HEAD
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
=======
    <Box className='home' sx={{ display: "flex" }}>
      <CssBaseline/>
      <CHeader open={open}/>
>>>>>>> b79d6da26b14da63ae22be64478dab4f91907202
      <CNavbar
        open={open}
        handleDrawerClose={handleDrawerClose}
        handleDrawerOpen={handleDrawerOpen}
      />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

<<<<<<< HEAD
        <Box className="home__content__page">
=======
        <Box className='home__content__page'>
>>>>>>> b79d6da26b14da63ae22be64478dab4f91907202
          <CTable></CTable>
          <CPagination count={10} color="primary" size="large" />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
