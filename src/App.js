import Header from "./components/common/Header"
import Home from './components/pages/Home'
import Login from './components/forms/Login'
import Signin from './components/forms/Signin'
import {AuthProvider} from './components/Auth/Auth'
import {Routes, Route} from 'react-router-dom'
import { Container } from "@mui/system"
import Profile from './components/pages/Profile'

const App = () =>{
  return (
    <AuthProvider>
    <>
   <Header/>
   <Container sx ={{margin : '6rem 0rem 6rem 0rem'}}>
   <Routes>
<Route path ='/' element={<Home/>} />
<Route path ='/signin' element={<Signin/>} />
<Route path ='/login' element={<Login/>} />
<Route path ='/profile' element={<Profile/>} />
   </Routes>
   </Container>
   </>
   </AuthProvider>
  )
}
export default App