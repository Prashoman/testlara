import React, { Component } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import Home from '../components/Home';
import Register from '../components/Register';
import Password from '../components/password';
import Slot from '../components/slot';

import axios from 'axios'


 class Header extends Component {

  render() {
    
    return (
      <BrowserRouter>
       <div>
        

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/password" element={<Password />} />
      <Route path="/bookingslot" element={<Slot />} />
      
      
    </Routes>
      </div>
      </BrowserRouter>
     
    )
  }
}

export default Header