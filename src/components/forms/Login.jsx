import {Container, Button, Grid, TextField} from '@mui/material'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useAuth} from '../Auth/Auth'
const Login = () =>{

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()
    const handleLogin = () => {
        auth.Login(firstName)
        navigate('/')
    }
    return (
        // <Container sx={{mt : 3}}>

        <Grid container  spacing={3} >

          <Grid xs={12} md={6} item>
        <TextField type='text' fullWidth label='First name' value={firstName} onChange={(e) => setFirstName(e.target.value)} margin= 'normal' />
        </Grid>

        <Grid xs={12} md={6}  item>
        <TextField type='text' fullWidth label='last name' value={lastName} onChange={(e) => setLastName(e.target.value)} margin= 'normal' />
        </Grid>
        <Button onClick ={handleLogin} type='submit' variant='contained'>Submit</Button>
        </Grid>
        // </Container>
    )
}
export default Login