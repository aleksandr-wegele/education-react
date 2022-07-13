import React from 'react';
import './Main.css'
import Profile from './myProfile/profile/Profile'
import Message from './message/Message'
import { Routes, Route } from 'react-router-dom'



const Main = (props) => {
  return (

    <div className="main">
      <div className='main-content'>
        <Routes>
          <Route path='/profile' element={<Profile />} />
          <Route path='/message' element={<Message />} />
        </Routes>
      </div>
    </div>

  );
}

export default Main;