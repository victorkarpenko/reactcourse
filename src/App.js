import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Header from "./components/Header/header";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {
  return (
      <BrowserRouter>
          <div className="App">
              <Header/>
              <NavbarContainer/>

              <div className="main">

                  <Route path='/dialogs' render={ () => <DialogsContainer/> } />
                  <Route path='/profile/:userId?' render={ () => <ProfileContainer/> }/>
                  <Route path='/settings' render={ () => <Settings/> }/>
                  <Route path='/users' render={ () => <UsersContainer/> }/>
              </div>
          </div>
      </BrowserRouter>
  );

};

export default App;