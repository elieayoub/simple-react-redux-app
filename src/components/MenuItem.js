import React, { Component } from 'react';

class MenuItem extends React.Component {
   render() {
      return (
          <li>
            <a href={this.props.data.link}>
              {this.props.data.title}
            </a> 
            <span className='seperator'> | </span>
          </li>
      );
   }
}

export default MenuItem;
