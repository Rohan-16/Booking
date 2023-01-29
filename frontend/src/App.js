
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./pages/HomePage";
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import React from 'react';
import Home from './pages/Home';
import Booking from'./pages/Booking';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </Router>
    </div>
     
  );
}

export default App;
