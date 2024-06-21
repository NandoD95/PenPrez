import React from "react"; 
import {useState} from "react";
import '../App.css';
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

function App() {  
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userId, setUserId] = useState(null) 

  useEffect(() => {
    fetch('/check_session')
      .then(response => {
        if (response.ok) { 
          response.json() 
          .then(data => {
            setIsLoggedIn(true) 
            console.log('sessionChecked') 
            setUserId(data.id)
        })
          
        } 
      })
      
      
      .catch(error => {
        console.error('Session check failed:', error);
      });
  }, []);
  return (
    <div className="App"> 
      <Navbar />
      <Outlet context = {[isLoggedIn, setIsLoggedIn, userId, setUserId]}/>
    </div>
  );
}
export default App;
