import React from "react"; 
import '../App.css' 
import NavBar from "./Navbar" 
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App"> 
      <NavBar />
      <Outlet />
    </div>
  );
}
export default App;
