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
        <Select
          defaultValue="Select a Day"
          className="mobile-select-day"
          onChange={this.handleChange}
        >
          <Option value="Monday">Monday</Option>
          <Option value="Tuesday">Tuesday</Option>
          <Option value="Wednesday">Wednesday</Option>
          <Option value="Thursday">Thursday</Option>
          <Option value="Friday">Friday</Option>
        </Select>
      </div>
    );
  }
}
