import React from 'react';
import { Menu, Icon } from 'antd';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Feed from './Feed';
import WeekView from './WeekView';


class Header extends React.Component {
  state = {
    current: 'bank'
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({current: e.key});
  }
  render() {
    return (
      <Router>
        <React.Fragment>
          <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">

            <Menu.Item key="bank">
              <Link to='/'>
                <Icon type="bank"/>Feed
              </Link>
            </Menu.Item>

            <Menu.Item key="shake">
              <Link to='/week'>
                <Icon type="shake"/>Weekly
              </Link>
            </Menu.Item>

            <Menu.Item key="mail">
              <a href="https://ant.design" target="_blank" rel="noopener noreferrer">About</a>
            </Menu.Item>
          </Menu>

        <Switch>
          <Route exact path="/" render={() => <Feed />} />
          <Route exact path="/week" render={() => <WeekView />} />
        </Switch>

      </React.Fragment>
    </Router>
    );
  }
}
export default Header
