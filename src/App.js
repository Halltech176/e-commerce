import Header from "./components/common/Header"
import Home from './components/pages/Home'
import Signin from './components/forms/Signin'
import {Routes, Route} from 'react-router-dom'

const App = () =>{
  return (
    <>
   <Header/>
   <Routes>
<Route path ='/' element={<Home/>} />
<Route path ='/signin' element={<Signin/>} />
{/* <Route path ='/profile' element={<Profile/>} /> */}
{/* <Route path ='/signin' element={<Sigin/>} />
<Route path ='/login' element={<Login/>} /> */}
   </Routes>
   </>
  )
}
export default App