import React from 'react';

import './App.css';
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/navbar";
import Profile from "./components/Profile/profile";

const App = () => {
  return (
    <div className="App">

      <Header/>
      <Navbar/>
      <Profile/>

    </div>
  );
};

export default App;



