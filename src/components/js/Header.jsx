import React from "react";
import { Menu, Icon, Select } from "antd";
import { Link } from "react-router-dom";

import "../css/Header.css";
const Option = Select.Option;

const spacing = {
  display: "flex",
  margin: "0 auto",
  justifyContent: "center",
  backgroundColor: "#ED5147",
  fontSize: "1.6em"
};

const textColor = {
  color: "white",
  letterSpacing: "1px",
  fontWeight: "200"
};

export default class DesktopHeader extends React.Component {
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
      <React.Fragment>
        <div className="main-container">
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
            style={spacing}
          >
            <Menu.Item key="dashboard">
              <Link className="menu-spacing" to="/" style={textColor}>
                <Icon type="dashboard" />Feed ME!
              </Link>
            </Menu.Item>

            <Menu.Item key="menu-unfold">
              <Link className="menu-spacing" to="/week" style={textColor}>
                <Icon type="menu-unfold" />Weekly
              </Link>
            </Menu.Item>

            <Menu.Item key="file-text">
              <Link className="menu-spacing" to="/list" style={textColor}>
                <Icon type="file-text" />Shopping List
              </Link>
            </Menu.Item>

            <Menu.Item key="mail">
              <a
                className="menu-spacing"
                style={textColor}
                href="https://github.com/jkyletreman/meal_planner_react"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon type="github" />View the Code!
              </a>
            </Menu.Item>

            <Menu.Item >
              <Select
                defaultValue="Select a Day"
                style={{
                  width: 200,
                  margin: "1rem"
                }}
                onChange={this.handleChange}
              >
                <Option style={{fontSize: "1.4em"}} value="Monday">Monday</Option>
                <Option style={{fontSize: "1.4em"}} value="Tuesday">Tuesday</Option>
                <Option style={{fontSize: "1.4em"}} value="Wednesday">Wednesday</Option>
                <Option style={{fontSize: "1.4em"}} value="Thursday">Thursday</Option>
                <Option style={{fontSize: "1.4em"}} value="Friday">Friday</Option>
              </Select>
            </Menu.Item>
          </Menu>
        </div>
      </React.Fragment>
    );
  }
}
