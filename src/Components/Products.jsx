import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Products.css'

function Products() {
  return (
    <>
    <ul>
        <li><Link to='gents'>Gents Products</Link></li>
        <li><Link to='ladies'>Ladies Products</Link></li>
    </ul>
    <Outlet/>
    </>
  )
}

export default Products