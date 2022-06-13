import {Box, AppBar, Stack, Toolbar,IconButton, Typography} from '@mui/material'
import {Link} from 'react-router-dom'
import { AiFillSlackSquare } from "react-icons/ai"
const Header = () => {
    return (
        <Box>
        <AppBar position='fixed'>
            <Toolbar sx={{display : 'flex', justifyContent:'space-between'}}>
              <Link to='/'>
                   <IconButton
                size='large'
                edge ='start'
                >
                    <AiFillSlackSquare/>
                </IconButton>
                </Link> 
                <Stack direction='row'spacing ={2}>
                <Typography sx={{fontWeight : '500'}}>Signin</Typography>
                <Typography>Login</Typography>
                <Typography>Profile</Typography>
                </Stack>
            </Toolbar>
        </AppBar>
        </Box>
    )
}
export default Header