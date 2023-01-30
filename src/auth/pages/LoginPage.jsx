import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { useForm } from '../../hooks'
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth'
import { AuthLayout } from '../layout/AuthLayout'

const formValidations = {
    email: [(value) => value.includes('@'), 'El correo debe tener una @'],
    password: [(value) => value.length >= 6, 'El password debe de tener mas de 6 caracteres'],
    displayName: [(value) => value.length >= 1, 'El nombre es obligatorio'],
}

export const LoginPage = () => {
    
    const { status } = useSelector(state => state.auth)

    const dispatch = useDispatch()
    const { email, password, onInputChange, formState} = useForm({
        email: 'dolorv86@gmail.com',
        password: '123456' 
    }, formValidations )

    const isAuthenticating = useMemo(() => status === 'checking', [status]) 

    const onSubmit = (event) => {
        event.preventDefault()
        dispatch( checkingAuthentication() )
    }

    const onGoogleSignIn = () => {
        dispatch( startGoogleSignIn() )
    }
    return (
        <AuthLayout title="Login">
                <form onSubmit={ onSubmit }>
                    <Grid container>
                        <Grid item xs={ 12 } sx={{ mt:2 }}>
                            <TextField 
                                label="correo" 
                                type="email" 
                                placeholder="correo@google.com"
                                fullWidth
                                name= "email"
                                value={ email }
                                onChange={onInputChange}
                            />
                        </Grid>

                        <Grid item xs={ 12 } sx={{ mt:2 }}>
                            <TextField 
                                label="contraseña" 
                                type="password" 
                                placeholder="contraseña"
                                fullWidth
                                name= "password"
                                value={ password }
                                onChange={onInputChange}
                            />
                        </Grid>
                        <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1}}>
                            <Grid item xs={ 12} sm={ 6 }>
                                <Button 
                                    disabled = {isAuthenticating}
                                    type="submit" 
                                    variant='contained' 
                                    fullWidth
                                >
                                    Login
                                </Button>
                            </Grid>
                            <Grid item xs={ 12} sm={ 6 }>
                                <Button 
                                    disabled = {isAuthenticating}
                                    variant='contained' 
                                    fullWidth
                                    onClick={onGoogleSignIn}
                                >
                                    <Google />
                                    <Typography sx={{ml: 1 }}>Google</Typography>
                                </Button>
                            </Grid>

                            <Grid container direction='row' justifyContent='end' sx={{ mt: 4 }}>
                                <Link component={ RouterLink } color='inherit' to='/auth/register'>
                                    Crear una cuenta
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
        </AuthLayout>
    )
}
