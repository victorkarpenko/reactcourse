import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Header from "./components/Header/header";
import Profile from "./components/Profile/profile";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";

const App = (props) => {
  return (
      <BrowserRouter>
          <div className="App">
              <Header/>
              <NavbarContainer/>

              <div className="main">

                  <Route path='/dialogs' render={ () => <DialogsContainer/> } />
                  <Route path='/(profile|)' render={ () => <Profile/> }/>
                  <Route path='/settings' render={ () => <Settings/> }/>
              </div>
          </div>
      </BrowserRouter>
  );

};

export default App;