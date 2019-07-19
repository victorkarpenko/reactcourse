import React from 'react';
import logo from './logo.svg';
import List from './components/list'
import './App.css';
import Header from "./components/header";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <List/>
    </div>
  );
};

export default App;



