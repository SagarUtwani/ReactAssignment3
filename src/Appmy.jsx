import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Aboutus from './Components/Aboutus'
import Contactus from './Components/Contactus'
import Products from './Components/Products'
import Gents from './Components/Gents'
import Ladies from './Components/Ladies'

function Appmy() {
  return (

    <>

      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/contactus' element={<Contactus />} />
        <Route path='/products' element={<Products />}>
          <Route path='gents' element={<Gents />} />
          <Route path='ladies' element={<Ladies />} />
        </Route>
      </Routes>
    </>
  )
}

export default Appmy