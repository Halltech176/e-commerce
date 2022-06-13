import Header from "./components/common/Header"
import Home from './components/pages/Home'
import Signin from './components/forms/Signin'
import {Routes, Route} from 'react-router-dom'
import { Container } from "@mui/system"

const App = () =>{
  return (
    <>
   <Header/>
   <Container sx ={{margin : '6rem 0rem 6rem 0rem'}}>
   <Routes>
<Route path ='/' element={<Home/>} />
<Route path ='/signin' element={<Signin/>} />
   </Routes>
   </Container>
   </>
  )
}
export default App