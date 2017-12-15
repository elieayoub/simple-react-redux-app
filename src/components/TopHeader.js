import React, { Component } from 'react';
import logo from '../images/logo.svg';


class TopHeader extends React.Component {
   render() {
      return (
      	<div className='header-top'>
	        <img src={logo} className="App-logo" alt="logo" />
	        <h1 className="App-title">Welcome to my simple React-Redux application</h1>
       	</div>
      );
   }
}

export default TopHeader;
