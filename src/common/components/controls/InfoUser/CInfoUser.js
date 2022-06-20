import React from 'react'
import {Button, Menu, MenuItem, Fade,
        Avatar, Typography, Box
} from '@mui/material';

import {
    ArrowDropDown as ArrowDropDownIcon,
    ArrowDropUp as ArrowDropUpIcon,
} from "@mui/icons-material"

import avartar from '../../../assets/images/avatar.png'

function CInfoUser() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
      setAnchorEl(null);
  };

  return (
    <div className='info-user'>
        <Button
            id="fade-button"
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            className='info-user__wrap__user'
        >
            <Avatar className='info-user__avatar' alt="Remy Sharp" src={avartar} />
            <Box className='info-user__user'>
                <Typography className='info-user__user__name' variant="p" component="div" gutterBottom>
                    Bùi Đông Nhật
                </Typography>
                <Typography className='info-user__user__decentralize' variant="p" component="div" gutterBottom>
                    Administrator
                </Typography>
            </Box>
            <Box className='info-user__toggle'>
                {
                    open ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>
                }
            </Box>
        </Button>
        <Menu
            id="fade-menu"
            MenuListProps={{
            'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
        >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
    </div>
  )
}

export default CInfoUser