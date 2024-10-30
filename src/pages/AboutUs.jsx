import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const AboutUs = () => {
  return (
    <div>
      <h1>About Us</h1>

      <div>
        <Link to="contact" ><h1>Contact</h1></Link>
      </div>

      <Outlet/>
    </div>
  )
}

export default AboutUs
