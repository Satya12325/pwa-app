import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AllRouter from './Router';
import NavBar from './Layouts/NavBar';

function App() {
  const updateOnlineStatus = () =>{
    console.log(`Your network status is ${navigator.onLine ? "Online" : "Offline"} `)
  }
  const getDeviceStatus = () => {
    console.log(`Your network status is ${navigator.onLine ? "Online" : "Offline"} ${navigator.onLine} `)
    window.addEventListener('online',  updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
  }
let arr = ["a", "b", "c", "d", "e", "f"]
const handleClick = (item) => {
  console.log(item)

}
  useEffect(()=>{
    getDeviceStatus();
  },[])
  return (
    <div className="App">
      <NavBar/>
   <AllRouter/>
  
    </div>
  );
}

export default App;
