import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/navbar";
import Profile from "./components/Profile/profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Settings from "./components/Settings/Settings";

const App = () => {
  return (
      <BrowserRouter>
          <div className="App">
              <Header/>
              <Navbar/>

              <div className="main">

                  <Route path='/dialogs' component={Dialogs} />
                  <Route path='/(profile|)' component={Profile}/>
                  <Route path='/settings' component={Settings}/>
              </div>
          </div>
      </BrowserRouter>
  );

};

export default App;



