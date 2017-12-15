import React, { Component } from 'react';
import Header from './containers/Header.js';
import Main from './containers/Main.js';
import Footer from './containers/Footer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className='main-content'>
          <Main />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
