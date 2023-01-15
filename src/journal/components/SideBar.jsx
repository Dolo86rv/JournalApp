import { TurnedInNot } from '@mui/icons-material'
import { Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const SideBar = ({ drawerWidth }) => {
    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }}}
        >
            <Drawer
                variant='permanent'
                open
                sx={{ 
                    display: { sx: 'block '},
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
                
            >
                <Toolbar>
                    <Typography
                        variant='h6' noWrap component='div'
                    >
                        Dolores Rodriguez
                    </Typography>
                </Toolbar>
                <Divider />

                <List>
                    {
                        ['Enero', 'Febrero', 'Marzo', 'Abril'].map( month =>(
                            <ListItem key={ month } disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={ month } />
                                        <ListItemText secondary= { 'Aliquip sint ipsum quis nulla.' } />                                  </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>

        </Box>
    )
}
