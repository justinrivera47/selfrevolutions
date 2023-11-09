import React from 'react';
import { Route, createRoutesFromElements, createBrowserRouter, Link, Outlet, RouterProvider } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Solutions from './Solutions';
import logo from '../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';

const Root = () => {
  const navigate = useNavigate();

//I have to fix the logo to make it click to home
const clickToHome = () => {
  navigate('/');
}

  return (
    <>
      <header>
          <div className="logo">
              <img  src={logo} alt="Logo" onClick={clickToHome}/>
          </div>
        <nav className='navbar'>
          <ul className='middle-bar'>
            <li className="nav-links"><Link to='/'>Home</Link></li>
            <li className="nav-links"><Link to='/about'>About</Link></li>
            <li className="nav-links"><Link to='/solutions'>Solutions</Link></li>
            <li className="nav-links"><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>
          <button className='button'>Book Now</button>
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
