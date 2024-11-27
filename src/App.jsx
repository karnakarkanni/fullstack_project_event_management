import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Nav from './home/nav';
import Home from './home/home';
import Service from './home/event';
import About from './home/about';
import Footer from './home/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Indoor from './eventmana.jsx/indoor';
import Outdoor from './eventmana.jsx/outdoor';
import Registration from './login/Registration';
import Customer from './login/customer';
import Api from './admin_access/todo';
// import Todo from './admin_access/todo';
import LoginForm from './creating_api\'s/api1';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path='/foot' element={<Footer/>}/>
          <Route path='/home/service' element={<Indoor/>}/>
          <Route path='/home/service1' element={<Outdoor/>} />
          <Route path='/login' element={<Customer/>} />
          <Route path='/Registration' element={<Registration/>} />
          {/* <Route path='/adimin/todo' element={<Todo/>}/> */}

          
        </Routes>
      {/* <Registration/> */}
      {/* <Customer/> */}
      {/* <Api/> */}
      <LoginForm/>

        
      </BrowserRouter>
    </>
  );
}

export default App;

