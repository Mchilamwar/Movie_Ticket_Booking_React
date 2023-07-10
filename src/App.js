//import React from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";import React from 'react';
import About from './assets/about';
import Contact from './assets/contact';
import ForgetPassword from './assets/forget';
import Bookmyshow from './assets/home';
import EmailLogin from './assets/login';
import Products from './assets/products';
import Review from './assets/review';
import Specials from './assets/specials';
import EmailRegistration from './assets/registration';
import EnquireNow from './assets/enquire';
import Enquireshow from './assets/enquiryshow';
import Logout from './assets/logout';
import User from './assets/user';
import Adminlogin from './assets/adminlogin';
import Admin from './assets/admin';
import MovieForm from './assets/movieform';
import Bookmovie from './assets/bookmovie';
import ViewBooking from './assets/viewbookings';
import ShowUsers from './showusers';

function App() {
  return(
    <>
       <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Bookmyshow/>} />
          <Route path="/home" element={<Bookmyshow/>} />
          <Route path="/login" element={<EmailLogin />} />
          <Route path="/products" element={<Products />} />
          <Route path="/review" element={<Review />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/specials" element={<Specials />} />
          <Route path="/forget" element={<ForgetPassword />} />
          <Route path="/registration" element={<EmailRegistration />} />
          <Route path="/enquire" element={<EnquireNow />} />
          <Route path="/show" element={<Enquireshow/>} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="/user" element={<ProtectedRoute allowedRoles={['user']}><User/></ProtectedRoute>} />
          <Route path="/adminlogin" element={<Adminlogin/>}/>
          <Route path="/admin" element={<ProtectedRoute allowedRoles={['admin']}><Admin/></ProtectedRoute>}/>
          <Route path="/movieform" element={<ProtectedRoute allowedRoles={['admin']}><MovieForm/></ProtectedRoute>}/>
          <Route path="/bookmovie" element={<ProtectedRoute allowedRoles={['user']}><Bookmovie/></ProtectedRoute>}/>
          <Route path="/viewbooking" element={<ProtectedRoute allowedRoles={['admin']}><ViewBooking/></ProtectedRoute>}/>
          <Route path="/showUsers" element={<ProtectedRoute allowedRoles={['admin']}><ShowUsers/></ProtectedRoute>}/>





        </Routes>
      </BrowserRouter>
    </>
  );
}

function ProtectedRoute({ children, allowedRoles }) {
  const loginStatus = localStorage.getItem('loginStatus');
  const userRole = localStorage.getItem('userRole');

  // Check if user is logged in
  if (!loginStatus) {
    return <Navigate to="/login" replace={true} />;
  }

  // Check if user has the allowed role
  if (allowedRoles && allowedRoles.indexOf(userRole) === -1) {
    return <Navigate to="/" replace={true} />;
  }

  return children;
}

export default App;
