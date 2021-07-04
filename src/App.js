import React from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { useSelector } from "react-redux";
import {  selectUser} from "./features/userSlice";
import Login from "./Login";




function App() {

  return (
    <>
    <div className = "App">
    <Header/>

  

       <div className = "app_body">
        <Sidebar/>
     
        <Feed/>
        
           </div>
     
             </div>
    </>
    
  );
}

export default App;
