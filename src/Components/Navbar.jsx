import React from 'react'
import { nav } from '../assets/nav'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='nav-div'>
        <ul className="navbar">
            {nav.map((e)=>{
                return <li id={e.id}><a>{e.title}</a></li>
            })}
        </ul>
    </div>
  )
}

export default Navbar