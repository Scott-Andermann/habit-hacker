import React, {useState} from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import Profile from './Profile/Profile';

import NavBar from './NavBar/NavBar';
import ProfileBar from './ProfileBar/ProfileBar';
import TitleBar from './TitleBar/TitleBar';
import './App.css';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [heading, setHeading] = useState('Dashboard');

  if (!isAuthenticated) {
    return (
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
        <div>
            <TitleBar heading={heading}/>
            <ProfileBar />
            <NavBar />
            <Routes>
                <Route path='/' element={<Dashboard setHeading={setHeading}/>} />
                <Route path='/dashboard' element={<Dashboard setHeading={setHeading}/>} />
                <Route path='/profile' element={<Profile setHeading={setHeading}/>} />
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
