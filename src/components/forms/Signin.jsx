import { TextField, Grid,Container } from '@mui/material'
import React from 'react'
import { useState } from "react"

const Signin = () => {

    const [firstName, setFirstName] = useState('')
    // const [secondName, setSecondName] = useState('')
    // const [username, setUsername] = useState('')
    console.log(firstName)
  return (
    <Container sx={{mt : 3}}>

        <Grid container  spacing={3} >

          <Grid xs={12} md={6} item>
        <TextField fullWidth label='First name' value={firstName} onChange={(e) => setFirstName(e.target.value)} margin= 'normal' />
        </Grid>

        <Grid xs={12} md={6}  item>
        <TextField fullWidth label='last name' value={firstName} onChange={(e) => setFirstName(e.target.value)} margin= 'normal' />
        </Grid>

        <Grid xs={12}  md={6}  item>
        <TextField fullWidth label='username' value={firstName} onChange={(e) => setFirstName(e.target.value)} margin= 'normal' />
        </Grid>

        <Grid xs={12} md={6}   item>
        <TextField fullWidth label='email' value={firstName} onChange={(e) => setFirstName(e.target.value)} margin= 'normal' />
        </Grid>

        <Grid xs={12} md={6}  item>
        <TextField fullWidth label='password' value={firstName} onChange={(e) => setFirstName(e.target.value)} margin= 'normal' />
        </Grid>
        
        </Grid>
    </Container>
  )
}

export default Signin