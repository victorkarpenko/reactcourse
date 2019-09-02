import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";

const App = (props) => {
  return (
      <BrowserRouter>
          <div className="App">
              <HeaderContainer/>
              <NavbarContainer/>

              <div className="main">

                  <Route path='/dialogs' render={ () => <DialogsContainer/> } />
                  <Route path='/profile/:userId?' render={ () => <ProfileContainer/> }/>
                  <Route path='/login' render={ () => <LoginContainer/> }/>
                  <Route path='/users' render={ () => <UsersContainer/> }/>
              </div>
          </div>
      </BrowserRouter>
  );

};

export default App;