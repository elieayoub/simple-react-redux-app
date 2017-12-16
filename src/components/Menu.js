import MenuItem from './MenuItem';
import React, { Component } from 'react';

class Menu extends React.Component {
    constructor() {
      super();
      this.state = {
         menu: 
         [
            {
               "title":"Home",
               "link":"/"
            },
            {
               "title":"About",
               "link":"about"
            },
            {
               "title":"To Do Example",
               "link":"todoExample"
            }
         ]
      }
   }
   render() {
      return (
          <div className='menu-content'>
            <ul className='menu-top'>
              {this.state.menu.map((menu, i) => <MenuItem key={i} data={menu} />)}
            </ul>
          </div>
      );
   }
}

export default Menu;
