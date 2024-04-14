import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Products() {
  return (
    <div>
        <input type="text" name="" id="" />
        <nav>
            <NavLink to='old'>Old Products</NavLink>
            <NavLink to='new'>New Products</NavLink>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Products