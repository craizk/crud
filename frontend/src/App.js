import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Login from './login'
import { createContext } from 'react';
import Home from './Home';
import NotLoggedin from './notLoggedin';
import SpecificItem from './SpecificItem';

export const AppContext = createContext();

const App =()=>{



 


return (

  <>

    <Link to='/login'>login page</Link><br></br>
    <Link to='/'>Home</Link><br></br>
    <Link to='/'>Logout</Link>
    <Routes>
      <Route path='/:id' element={<Home />}></Route>
      <Route path='/' element={<NotLoggedin />}></Route>
      <Route path='/login' element={<Login />} ></Route>
      <Route path="/specific/item/:id" element={<SpecificItem />}></Route>
      </Routes>
      
  </>
)

}

export default App



