import React from 'react';
import logo from './logo.svg';
import List from './components/list'
import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="App">

      {/*<Header/>
      <List/>
      <Footer/>*/}
      <header className="header">
          <img src={logo} alt="" className="logo"/>
      </header>
        <aside className="sidebar">
            <nav className="navigation">
                <a href="/">home</a>
                <a href="/order">order</a>
                <a href="/blog">blog</a>
            </nav>
        </aside>
        <main className="main">
            <div className="main__img"></div>
            <div className="main__profile"></div>
            <div className="main__posts">
                <div className="main__post-input"></div>
                <div className="main__posts-list">
                    <div className="post"></div>
                </div>
            </div>
        </main>
    </div>
  );
};

export default App;



