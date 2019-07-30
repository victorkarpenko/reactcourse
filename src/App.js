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
              <Navbar state={props.state.sidebar}/>

              <div className="main">

                  <Route path='/dialogs' render={ () => <Dialogs state={props.state.messagesPage} sendMsg={props.sendMsg} updateNewMsg={props.updateNewMsg}/> } />
                  <Route path='/(profile|)' render={ () => <Profile state={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText} /> }/>
                  <Route path='/settings' render={ () => <Settings/> }/>
              </div>
          </div>
      </BrowserRouter>
  );

};

export default App;