import Home from './Home.js'
import About from './About.js'
import { CounterButton } from '../components/CounterButton';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

class Main extends React.Component {
   render() {
      return (
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
        </Switch>
      );
   }
}

export default Main;
