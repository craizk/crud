import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Login from './login'
import { createContext } from 'react';
import Home from './Home';

export const AppContext = createContext();

const App =()=>{



 


return (

  <>

    <Link to='/login'>login page</Link>
    <Link to='/'>Home</Link>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<Login />} ></Route>
      </Routes>
      
  </>
)

}

export default App



