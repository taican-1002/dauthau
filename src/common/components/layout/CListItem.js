import React from 'react'

import { ListItemButton, ListItemIcon, ListItemText} from "@mui/material";

function CListItem(props) {
  return (
    <>
        <ListItemButton
            key={props.text}
            sx={{
                minHeight: 48,
                justifyContent: props.open ? "initial" : "center",
                px: 2.5,
            }}
            >
            <ListItemIcon
                sx={{
                minWidth: 0,
                mr: props.open ? 3 : "auto",
                justifyContent: "center",
                }}
            >
                {props.children}
            </ListItemIcon>
            <ListItemText primary={props.text} 
                sx={{ opacity: props.open ? 1 : 0 }} 
            />
        </ListItemButton>
    </>
  )
}

export default CListItem