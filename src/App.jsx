import React from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  BrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Layout from "./Layout/Layout";
import CustomerCare from '../customercare';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      
        <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/customercare" element={<CustomerCare />} />
        <Route path="/aboutus" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/Project" element={<Project/>} />
        
     </Route>
     
    )
  );

  return (
    
      <RouterProvider router={router} />
    
  );
}

export default App;