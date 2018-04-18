import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from "react-router-dom";
import { Icon } from "antd"
import "../css/MobileNav.css"

export default class MobileNav extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu>
        <Link to="/">
          <Icon type="dashboard" />Feed ME!
        </Link>

        <Link to="/week">
          <Icon type="menu-unfold" />Weekly
        </Link>

        <Link to="/list">
          <Icon type="file-text" />Shopping List
        </Link>

      </Menu>
    );
  }
}
