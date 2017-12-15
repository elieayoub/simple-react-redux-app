import React, { Component } from 'react';
import Header from './containers/Header.js';
import Footer from './containers/Footer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          Welcome to my new ReactJS application
        </p>
        <Footer />
      </div>
    );
  }
}

export default App;
