import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Add from './components/Add'
import Login from './components/Login'
import PrivateRoutes from './components/PrivateRoutes'

const App = () => {
  return (
    <div>
      <Navbar/>
    <Routes>
      
      <Route path="/"element={<Home/>} />
      <Route element={<PrivateRoutes/>}>
        <Route path="/add"element={<Add/>} />
      </Route>
      <Route path="/login"element={<Login/>} />

    </Routes>
    </div>
  )
}

export default App