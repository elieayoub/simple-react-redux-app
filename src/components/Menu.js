import React, { Component } from 'react';
import MenuItem from './MenuItem';


class Menu extends React.Component {
    constructor() {
      super();
      this.state = {
         menu: 
         [
            {
               "title":"Home",
               "link":"#"
            },
            {
               "title":"Photo Gallery",
               "link":"#"
            }
         ]
      }
   }
   render() {
      return (
          <ul className='menu-top'>
            {this.state.menu.map((menu, i) => <MenuItem key={i} data={menu} />)}
          </ul>
      );
   }
}

export default Menu;
