import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/navbar";
import Profile from "./components/Profile/profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Settings from "./components/Settings/Settings";


const App = (props) => {
  return (
      <BrowserRouter>
          <div className="App">
              <Header/>
              <Navbar/>

              <div className="main">

                  <Route path='/dialogs' render={ () => <Dialogs dialogs={props.dialogs}/> } />
                  <Route path='/(profile|)' render={ () => <Profile posts={props.posts} /> }/>
                  <Route path='/settings' render={ () => <Settings/> }/>
              </div>
          </div>
      </BrowserRouter>
  );

};

export default App;