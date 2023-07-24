import React from 'react';
import './index.css'
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import ContactUsPage from '../../pages/ContactUsPage';
import LoginPage from '../../pages/LoginPage';
import RegisterPage from '../../pages/RegisterPage';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/contact_us' element={<ContactUsPage/>} />
        <Route path='/login_page' element={<LoginPage/>} />
        <Route path='/register_page' element={<RegisterPage/>} />
      </Routes>
    </div>
  );
}

export default App;
