import { Outlet } from 'react-router';
import './App.css';
import Navbar from './Components/NavBar/NavBar';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

function App() {
  
  return (
    <>
    <Navbar/>
    <Outlet/>
    <ToastContainer/>
    </>
  );
}

export default App;
