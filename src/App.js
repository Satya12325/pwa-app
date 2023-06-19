import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AllRouter from './Router';

function App() {
  const updateOnlineStatus = () =>{
    console.log(`Your network status is ${navigator.onLine ? "Online" : "Offline"} `)
  }
  const getDeviceStatus = () => {
    console.log(`Your network status is ${navigator.onLine ? "Online" : "Offline"} ${navigator.onLine} `)
    window.addEventListener('online',  updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
  }

  useEffect(()=>{
    getDeviceStatus();
  },[])
  return (
    <div className="App">
   <AllRouter/>
    </div>
  );
}

export default App;
