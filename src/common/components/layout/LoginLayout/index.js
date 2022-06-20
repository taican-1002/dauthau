import React from 'react'
import { Box } from '@mui/material'
import MHeader from '../../../../modules/Auth/components/MHeader'
import MFooter from '../../../../modules/Auth/components/MFooter'

function LoginLayout(props) {
  return (
    <>
        <MHeader/>
        <Box>
            {props.children}
        </Box>
        <MFooter/>
    </>
  )
}

export default LoginLayout