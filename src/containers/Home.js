import React, { Component } from 'react';
import CounterButton from '../components/CounterButton.js';

class Home extends React.Component {
   render() {
      return (
        <p className="App-intro">
          Welcome to my new ReactJS application
          <CounterButton className='btn-default' />
        </p>
      );
   }
}

export default Home;
