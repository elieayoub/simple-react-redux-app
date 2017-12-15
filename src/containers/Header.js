import React, { Component } from 'react';
import TopHeader from '../components/TopHeader.js';
import Menu from '../components/Menu.js';
import logo from '../images/logo.svg';


class Header extends React.Component {
   render() {
      return (
        <header className="App-header">
          <TopHeader />
          <Menu />
        </header>
      );
   }
}

export default Header;
