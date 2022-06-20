import React from 'react'
import {IconButton} from '@mui/material';

function CIconButton(props) {
  return (
    <IconButton aria-label="delete">
        {props.children}
    </IconButton>
  )
}

export default CIconButton