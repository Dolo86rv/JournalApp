import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { useForm } from '../../hooks'
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth'
import { AuthLayout } from '../layout/AuthLayout'

export const LoginPage = () => {
    const dispatch = useDispatch()
    const { email, password, onInputChange, formState} = useForm({
        email: 'dolor86@google.com',
        password: '123456' 
    })

    const onSubmit = (event) => {
        event.preventDefault()
        dispatch( checkingAuthentication() )
    }

    const onGoogleSignIn = (event) => {
        console.log('onGoogleSignIn')
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
                                <Button type="submit" variant='contained' fullWidth>
                                    Login
                                </Button>
                            </Grid>
                            <Grid item xs={ 12} sm={ 6 }>
                                <Button 
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
