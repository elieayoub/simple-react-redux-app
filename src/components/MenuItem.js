import { Link } from 'react-router-dom'
import React, { Component } from 'react';

class MenuItem extends React.Component {
   render() {
      return (
          <li>
            <Link to={this.props.data.link}>{this.props.data.title}</Link>
            <span className='seperator'> | </span>
          </li>
      );
   }
}

export default MenuItem;
