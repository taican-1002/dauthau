import React from 'react'
import {IconButton} from '@mui/material';

import classNames from "classnames";

function CIconButton({
  bgColor,
  onOpenModal,
  className,
  children
}) {
  return (
    <IconButton sx={{
        backgroundColor: bgColor,
        color: '#fff'
      }}
      id='icon-button'
      className={classNames('icon-button',className)}
      aria-label="delete" onClick={onOpenModal}>
        {children}
    </IconButton>
  )
}

export default CIconButton