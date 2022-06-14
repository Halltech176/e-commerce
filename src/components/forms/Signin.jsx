import { TextField, Grid,Container, Button, Typography, Checkbox } from '@mui/material'
import React from 'react'
import { useState } from "react"

const Signin = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')

  return (
    <Container sx={{mt : 3}}>

        <Grid container  spacing={3} >

          <Grid xs={12} md={6} item>
        <TextField type='text' fullWidth label='First name' value={firstName} onChange={(e) => setFirstName(e.target.value)} margin= 'normal' />
        </Grid>

        <Grid xs={12} md={6}  item>
        <TextField type='text' fullWidth label='last name' value={lastName} onChange={(e) => setLastName(e.target.value)} margin= 'normal' />
        </Grid>

        <Grid xs={12}  md={6}  item>
        <TextField type='text' fullWidth label='username' value={username} onChange={(e) => setUsername(e.target.value)} margin= 'normal' />
        </Grid>

        <Grid xs={12}  md={6}  item>
        <TextField type='number' fullWidth label='phone number' value={number} onChange={(e) => setNumber(e.target.value)} margin= 'normal' />
        </Grid>

        <Grid xs={12} md={6}   item>
        <TextField type='email' fullWidth label='email' value={email} onChange={(e) => setEmail(e.target.value)} margin= 'normal' />
        </Grid>

        <Grid xs={12} md={6}  item>
        <TextField type='password' fullWidth label='password' value={password} onChange={(e) => setPassword(e.target.value)} margin= 'normal' />
        </Grid>

              
        <Grid xs={12} md={6}  item>
        <Typography><Checkbox></Checkbox> I agree to the terms and conditions</Typography>
        </Grid>

        <Grid xs={12} md={6}  item>
        <Button sx={{width : '48%', marginRight : '.5rem'}} variant='contained'>Reset</Button>
        <Button sx={{width : '48%', marginLeft : '.5rem'}} variant='contained'>Submit</Button>
        </Grid>
        
        </Grid>
    </Container>
  )
}

export default Signin