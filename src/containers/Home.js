import React, { Component } from 'react';

class Home extends React.Component {
   render() {
      return (
      	<div>
      	<h1>Hello World</h1>
	        <p className="App-intro">
	          Welcome to my new ReactJS application, <span className='red bg-yellow'>you can navigate my application using the above top menu</span>
	        </p>
        </div>
      );
   }
}

export default Home;
