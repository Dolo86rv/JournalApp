import { DeleteOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material'
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import { useForm } from '../../hooks/useForm'
import React, { useEffect, useMemo, useRef } from 'react'
import { ImageGallery } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveNote } from '../../store/journal/journaSlice'
import { startDeletingNote, startSaveNote, startUploadingFiles } from '../../store/journal/thunks'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

export const NoteView = () => {
    
    const dispatch = useDispatch()
    const { active:note, messageSaved, isSaving} = useSelector(state => state.journal)
    const { body, title, date, onInputChange, formState } = useForm( note )

    const dateString = useMemo(()=>{
        const newDate = new Date( date )
        const formaDate = new Intl.DateTimeFormat("es-ES", {dateStyle: "full"}).format(newDate)

        return formaDate.charAt(0).toUpperCase() + formaDate.slice(1)
    }, [date])

    const fileInputRef = useRef()

    useEffect(()=>{
        dispatch(setActiveNote(formState))
    },[formState])

    useEffect(()=>{
        if( messageSaved.length > 0 ){
            Swal.fire('Nota actualizada', messageSaved, 'success')
        }
    }, [messageSaved])

    const onSaveNote =()=>{
        dispatch( startSaveNote())
    }

    const onFileInputChange = ({ target }) => {
        if( target.files === 0 ) return
        dispatch(startUploadingFiles(target.files))
    }

    const onDelete = () =>{
        dispatch( startDeletingNote())
    }

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
                    { dateString }
                </Typography>
            </Grid>

            <Grid item>
                <input
                    type="file"
                    multiple
                    ref={ fileInputRef }
                    onChange={ onFileInputChange }
                    style={{ display: 'none' }}
                />
                <IconButton 
                    color="primary"
                    disabled= { isSaving }
                    onClick={() => fileInputRef.current.click()}
                >
                    <UploadOutlined />
                </IconButton>
                <Button
                    disabled= { isSaving } 
                    onClick={onSaveNote}
                    color='primary' sx={{ padding: 2 }}>
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
                    sx={{ border: 'none', mb: 1 }}
                    name="title"
                    value={ title }
                    onChange={ onInputChange }
                /> 

                <TextField
                    type='text'
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Que sucedio en el dia de hoy?"
                    label=""
                    minRows={ 5 }
                    name="body"
                    value={ body }
                    onChange={ onInputChange }
                /> 
            </Grid>
            <Grid container justifyContent='end'>
                <Button
                    onClick={ onDelete }
                    sx={{ mt: 2}}
                    color='error'
                >
                    <DeleteOutline />
                    Borrar
                </Button>
            </Grid>

            {/* Image Gallery */}
            <ImageGallery images= {note.imageUrls} />

        </Grid>
    )
}
