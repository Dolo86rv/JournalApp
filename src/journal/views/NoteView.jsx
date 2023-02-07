import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { fontSize } from '@mui/system'
import React from 'react'
import { ImageGallery } from '../components'

export const NoteView = () => {
    return (
        <Grid 
            className="animate__animated animate__fadeIn animate__faster"
            container='row' 
            justifyContent='space-between' 
            sx={{ mb: 1 }} 
            alignItems='center' 
        >
            <Grid item>
                <Typography fontSize={ 39 } fontWeight='light'>
                    28 de agosto, 2023
                </Typography>
            </Grid>

            <Grid item>
                <Button color='primary' sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize:30, mr: 1 }} />
                        Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type='text'
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un titulo"
                    label="Titulo"
                    sx={{ mb: 1 }}
                /> 

                <TextField
                    type='text'
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Que sucedio en el dia de hoy?"
                    label=""
                    minRows={ 5 }
                /> 
            </Grid>

            {/* Image Gallery */}
            <ImageGallery />

        </Grid>
    )
}
