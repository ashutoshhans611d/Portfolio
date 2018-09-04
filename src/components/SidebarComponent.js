import React, { Component } from "react";
import "../css/Sidebar.scss";
import classnames from "classnames";
import { NavLink } from 'react-router-dom';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        { label: "Home", link: "/home", icon: "fa-home" },
        { label: "Work", link: "/work", icon: "fa-eye" },
        { label: "Blog", link: "/blog", icon: "fa-info" },
        { label: "Contact", link: "/contact", icon: "fa-envelope" }
      ]
    };
  }
  render() {
    const navItems = this.state.navItems.map(navItem => {
      return (
        <NavLink
          key={navItem.label}
          to={navItem.link}
          className={classnames("bar-item", "button", "padding-large", "black", navItem.active? "active":"")}>
          <i className={classnames("fa", "xxlarge", navItem.icon)} />
          <p>{navItem.label}</p>
        </NavLink>
      );
    });
    return (
      <nav className="sidebar bar-block w3-small w3-hide-small center">
        {navItems}
      </nav>
    );
  }
}

export default Sidebar;
