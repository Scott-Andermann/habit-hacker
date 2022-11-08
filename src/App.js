import React, {useState} from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/loginFlow/Login/Login';
import AddUser from './components/loginFlow/AddUser/AddUser';

import Dashboard from './components/dashboardFlow/Dashboard/Dashboard';
import Profile from './components/profileFlow/Profile/Profile';
import AddActivity from './components/activityFlow/AddActivity/AddActivity';
import Stats from './Stats/Stats';
import Activities from './components/activityListComponents/Activities/Activities';

import NavBar from './NavBar/NavBar';
import ProfileBar from './ProfileBar/ProfileBar';
import ProfileModal from './ProfileModal/ProfileModal';
import TitleBar from './TitleBar/TitleBar';
import './App.css';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [heading, setHeading] = useState('Dashboard');
  const [modal, setModal] = useState(false)


  if (!isAuthenticated) {
    return (
      <BrowserRouter>
        {/* <Login /> */}
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/create-account' element={<AddUser />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
        <div>
            <TitleBar heading={heading}/>
            <ProfileBar setModal={setModal}/>
            {/* <ProfileModal modal={modal}/> */}
            <NavBar />
            <Routes>
                <Route path='/' element={<Dashboard setHeading={setHeading}/>} />
                <Route path='/dashboard' element={<Dashboard setHeading={setHeading}/>} />
                <Route path='/profile' element={<Profile setHeading={setHeading}/>} />
                <Route path='/add_activity' element={<AddActivity setHeading={setHeading} />} />
                <Route path='/stats' element={<Stats setHeading={setHeading} />} />
                <Route path='/activities' element={<Activities setHeading={setHeading} />} />
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
