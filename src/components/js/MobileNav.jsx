import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { Icon, Select } from "antd";
import "../css/MobileNav.css";

const Option = Select.Option;

export default class MobileNav extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }
  constructor() {
    super();
    this.state = {
      current: ""
    };
  }
  handleChange = value => {
    this.props.setDayForRecipes(value);
  };

  render() {
    return (
      <div className="mobile-header-flex">
        <Menu >
          <Link className="mobile-hamburger-text" to="/">
            <Icon type="dashboard" />  Feed ME!
          </Link>

          <Link className="mobile-hamburger-text" to="/week">
            <Icon type="menu-unfold" />  Weekly
          </Link>

          <Link className="mobile-hamburger-text" to="/list">
            <Icon type="file-text" />  Shopping List
          </Link>
        </Menu>
        <Select
          style={{fontSize: "1.3em"}}
          defaultValue="Select a Day"
          className="mobile-select-day hamburger-select-text"
          onChange={this.handleChange}
        >
          <Option className="hamburger-select-text" style={{fontSize: "1.6em", padding: "1rem"}} value="Monday">Monday</Option>
          <Option className="hamburger-select-text" style={{fontSize: "1.6em", padding: "1rem"}} value="Tuesday">Tuesday</Option>
          <Option className="hamburger-select-text" style={{fontSize: "1.6em", padding: "1rem"}} value="Wednesday">Wednesday</Option>
          <Option className="hamburger-select-text" style={{fontSize: "1.6em", padding: "1rem"}} value="Thursday">Thursday</Option>
          <Option className="hamburger-select-text" style={{fontSize: "1.6em", padding: "1rem"}} value="Friday">Friday</Option>
        </Select>
      </div>
    );
  }
}
