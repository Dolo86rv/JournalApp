import { Toolbar } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Navbar } from '../components'
import { SideBar } from '../components/SideBar'

const drawerWidth = 240

export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex '}}>
            
            {/*Navbar drawerWidth*/}
            <Navbar drawerWidth={ drawerWidth } />
            
            {/*SideBar drawerWidth*/}
            <SideBar drawerWidth={ drawerWidth } />
            <Box
                component='main'
                sx={{ flexGrow: 1, p: 3 }}
            >
                {/*Toolbar*/}
                <Toolbar />

                { children }
            </Box>
        </Box>
    )
}
