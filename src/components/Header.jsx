import { AppBar, Typography } from '@mui/material'
import React from 'react'

function Header() {
  return (
    <div>
        <AppBar 
          sx={{
          position:"static",
          width: "768px",
          height: "159px",
          backgroundColor: "#0D0745",
          }} >
          <Typography 
          sx={{
          marginTop:'61px',
          fontWeight:'600', 
          fontSize: '24px',
          lineHeight: '36px'}}>TASK TRACKER APPLICATION
          </Typography>
        </AppBar>
    </div>
  )
}

export default Header
