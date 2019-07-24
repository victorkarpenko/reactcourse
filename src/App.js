import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/navbar";
import Profile from "./components/Profile/profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Settings from "./components/Settings/Settings";

let dialogs = {
    dialogsData: [
        {id: '1', name: 'Viktor'},
        {id: '2', name: 'Sebek'},
        {id: '3', name: 'Cotlovan'},
    ],
     messagesData: [
        {id:1, message: 'Hey, how are you', type: 'input'},
        {id:2, message: 'Hi, a\'im zbs. You?', type: 'output'},
        {id:2, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam beatae blanditiis eaque explicabo illum itaque iure laboriosam libero modi, odio quisquam quos repellendus repudiandae rerum sapiente suscipit tempora tempore voluptates?', type: 'output'},
        {id:1, message: 'Okay, thanks for you respond', type: 'input'},
    ]
};

const App = () => {
  return (
      <BrowserRouter>
          <div className="App">
              <Header/>
              <Navbar/>

              <div className="main">

                  <Route path='/dialogs' render={ () => <Dialogs data={dialogs}/> } />
                  <Route path='/(profile|)' render={ () => <Profile /> }/>
                  <Route path='/settings' render={ () => <Settings/> }/>
              </div>
          </div>
      </BrowserRouter>
  );

};

export default App;