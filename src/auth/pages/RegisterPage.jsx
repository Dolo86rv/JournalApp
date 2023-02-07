import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import React, { useState} from 'react'
import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { useForm } from '../../hooks'
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks'
import { AuthLayout } from '../layout/AuthLayout'

const formData = {
    email: '',
    password: '',
    displayName:''
}

const formValidations = {
    email: [(value) => value.includes('@'), 'El correo debe tener una @'],
    password: [(value) => value.length >= 6, 'El password debe de tener mas de 6 caracteres'],
    displayName: [(value) => value.length >= 1, 'El nombre es obligatorio'],
}
export const RegisterPage = () => {
    
    const dispatch = useDispatch()
    const [formSubmitted, setformSubmitted] = useState(false)
    const { status, errorMessage} = useSelector( state => state.auth)
    const isCheckingAuthentication = useMemo(()=> status === 'checking', [status])   
        
    const { 
        displayName, 
        email, 
        password, 
        displayNameValid, 
        emailValid, 
        passwordValid, 
        isFormValid,
        onInputChange, 
        formState } = useForm(formData, formValidations)
    
    //console.log( displayNameValid )
    
    const onSubmit = ( event ) => {
        event.preventDefault()
        setformSubmitted(true)

        if( !isFormValid ) return 
        
        dispatch(startCreatingUserWithEmailPassword(formState))
        
    }

    return (
        <AuthLayout title="Crear cuenta">
            <h1>FormValid: { isFormValid ? 'Valido' : 'Incorrecto' }</h1>
                <form onSubmit={onSubmit}
                    className="animate__animated animate__fadeIn animate__faster"
                >
                    <Grid container>
                        <Grid item xs={ 12 } sx={{ mt:2 }}>
                            <TextField 
                                label="Nombre completo" 
                                type="text" 
                                placeholder='Nombre completo'
                                fullWidth
                                name="displayName"
                                value={ displayName }
                                onChange = { onInputChange }
                                error={!!displayNameValid && formSubmitted}
                                helperText={displayNameValid}
                            />
                        </Grid>
                        <Grid item xs={ 12 } sx={{ mt:2 }}>
                            <TextField 
                                label="Correo" 
                                type="email" 
                                placeholder="correo@google.com"
                                fullWidth
                                name="email"
                                value={ email }
                                onChange = { onInputChange }
                                error={!!emailValid && formSubmitted }
                                helperText={emailValid}
                            />
                        </Grid>
                        <Grid item xs={ 12 } sx={{ mt:2 }}>
                            <TextField 
                                label="Contraseña" 
                                type="password" 
                                placeholder="Contraseña"
                                fullWidth
                                name="password"
                                value={ password }
                                onChange = { onInputChange }
                                error={!!passwordValid && formSubmitted}
                                helperText={passwordValid}
                            />
                        </Grid>
                        <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1}}>
                            <Grid item xs={ 12} display={!!errorMessage ? '': 'none'}>
                                <Alert severity='error'>
                                    {errorMessage}
                                </Alert>
                            </Grid>
                            <Grid item xs={ 12}>
                                <Button 
                                    disabled = { isCheckingAuthentication }
                                    type="submit"
                                    variant='contained' 
                                    fullWidth
                                >
                                    Crear cuenta
                                </Button>
                            </Grid>
                            
                            <Grid container direction='row' justifyContent='end' sx={{ mt: 4 }}>
                                <Typography sx={{mr: 1 }}>¿Ya tienes una cuenta?</Typography>
                                <Link component={ RouterLink } color='inherit' to='/auth/login'>
                                    Ingresar
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
        </AuthLayout>
    )
}

