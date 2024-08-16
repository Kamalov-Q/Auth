/* eslint-disable no-unused-vars */
import './App.css'
import Error from './Components/Error/Error'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import {Routes, Route, Navigate} from 'react-router-dom'
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='*' element={<Navigate to={'/home'}/>}/>
    </Routes>
    </>
  )
}

export default App
