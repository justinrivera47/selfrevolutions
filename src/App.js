import './App.css';
// import Hero from './components/Hero';
// import NavBar from './components/NavBar';
import { Route, createRoutesFromElements, createBrowserRouter, Link, Outlet, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Solutions from './components/Solutions';




const Root = () => {

  return (
    <> 
      <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/solutions'>Solutions</Link>
        <Link to='/contact'>Contact</Link>
      </div>

      <div>
        <Outlet />
      </div>
    </>
  )
}

function App() {

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
  );
}

export default App;
