import React from 'react';
import { Route, createRoutesFromElements, createBrowserRouter, Link, Outlet, RouterProvider } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Solutions from './Solutions';
import logo from '../assets/images/logo-01.jpeg';

const Root = () => {

  return (
    <>
      <header>
        <div className="logo">
            <img  src={logo} srcSet={logo} alt="Logo"/>
        </div>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/solutions'>Solutions</Link>
          <Link to='/contact'>Contact</Link>
        </div>
        <button>Book Now</button>
      </header>

        <div>
          <Outlet />
        </div>
    </>
  )
}

const NavBar = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  )

  return (
    <div>
    <RouterProvider router={router} />
  </div>
  )
}

export default NavBar
