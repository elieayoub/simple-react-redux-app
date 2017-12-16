import React, { Component } from 'react';
import CounterButton from '../components/CounterButton.js';
import { incrementCounter } from '../actions'

class Home extends React.Component {
   render() {
      return (
      	<div>
      	<h1>Hello World</h1>
	        <p className="App-intro">
	          Welcome to my new ReactJS application &nbsp;
	          <CounterButton 
	          className='btn-default'  />
	        </p>
        </div>
      );
   }
}

export default Home;
