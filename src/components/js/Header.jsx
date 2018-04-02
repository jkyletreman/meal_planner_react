import React from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Header extends React.Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="bank">
          <Icon type="bank" />Feed
        </Menu.Item>
        <Menu.Item key="shake" >
          <Icon type="shake" />Weekly
        </Menu.Item>
        <Menu.Item key="About">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">About</a>
        </Menu.Item>
      </Menu>
    );
  }
}
export default Header
