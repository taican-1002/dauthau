import React from 'react'

import { AppBar as MuiAppBar,
         Toolbar,
         Box
} from '@mui/material';

import { styled } from "@mui/material/styles";

import { Search as SearchIcon,
         Notifications as NotificationsIcon,
         
} from '@mui/icons-material';

import CInput from '../controls/CInput/CInput';
import CIconButton from '../controls/CIconButton/CIconButton';
import CButton from '../controls/CButton/CButton';
import CInfoUser from '../controls/InfoUser/CInfoUser';

const drawerWidth = 320;
const drawerWidthSmall = 100;

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

function CHeader(props) {
  return (
    <AppBar id='header' className='header' position="fixed" open={props.open}>
        <Toolbar>
            <Box className='header__search'>
                <CInput
                    placeholder='Tìm tất cả ...'
                    type='text'
                    className='header__search__input'
                />
                <CButton className='header__search__button'>
                    <SearchIcon/>
                </CButton>
            </Box>
            <Box className='header__info'>
                <Box className='header__info__noti'>
                    <CIconButton>
                        <NotificationsIcon/>
                    </CIconButton>
                </Box>
                <CInfoUser/>
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default CHeader