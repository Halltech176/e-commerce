import Sidebar from './Components/Sidebar'
import Feed from './Components/Feed'
import Rightbar from './Components/Rightbar'
import Navbar from './Components/Navbar'
import Add from './Components/Add'
import {useState} from 'react'
import {Box, createTheme, ThemeProvider, Stack} from '@mui/material'
const App = () =>{
  const [mode, setMode] = useState('light')
  const [barOpen, setbarOpen] = useState('block')
  const darkTheme = createTheme({
    palette : {
      mode : mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor ={'background.default'} color={'text.primary'}>
      <Navbar barOpen ={barOpen} setbarOpen = {setbarOpen}/>
      <Stack direction='row' spacing = {2} justifyContent ='space-between'>
    <Sidebar barOpen ={barOpen} setbarOpen = {setbarOpen} setMode={setMode} mode ={mode}/>
    <Feed/>
    <Rightbar />
    </Stack>
    <Add/>
    </Box>
    </ThemeProvider>
  )
}
export default App