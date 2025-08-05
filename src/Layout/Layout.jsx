import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
function Layout() {
  return (
    <>
    <div className='justify-around'>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
    </>
  );
}

export default Layout;