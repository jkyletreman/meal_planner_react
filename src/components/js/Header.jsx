import React from 'react';
import {Menu, Icon, Select, Button} from 'antd';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Feed from './Feed';
import WeekView from './WeekView';
const Option = Select.Option

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      current: '',
      day: 'Monday',
      info: [],
      week: {
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
        }
      };
      this.updateDay = this.updateDay.bind(this)
    }

  componentWillMount() {
    this.getCards();
  }
  async getCards() {
    const res = await fetch('/api/smallCards');
    const cards = await res.json();
    this.setState({ info: cards });
  }
  handleClick = (e) => {
    this.setState({current: e.key});
  };
  handleChange = (value) => {
    this.setState({ day: value })
  }
  handleSubmission = () => {

  }
  updateDay(info) {
    const day = this.state.day;

    switch (day) {
      case 'Monday':
        const monday = this.state.week.Monday;
        monday.push(info)
        this.setState(this.state.week.Monday = monday);
        break;

      case 'Tuesday':
        const tuesday = this.state.week.Tuesday;
        tuesday.push(info)
        this.setState(this.state.week.Tuesday = tuesday);
        break;

      case 'Wednesday':
        const wednesday = this.state.week.Wednesday;
        wednesday.push(info)
        this.setState(this.state.week.Wednesday = wednesday);
        break;

      case 'Thursday':
        const thursday = this.state.week.Thursday;
        thursday.push(info)
        this.setState(this.state.week.Thursday = thursday);
        break;

      case 'Friday':
        const friday = this.state.week.Friday;
        friday.push(info)
        this.setState(this.state.week.Friday = friday);
        break;

      default:
        console.log('nope');
    }
  }
  render() {
    return (<Router>
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

          <Select defaultValue="Monday" style={{
              width: 120
            }} onChange={this.handleChange}>
            <Option value="Monday">Monday</Option>
            <Option value="Tuesday">Tuesday</Option>
            <Option value="Wednesday">Wednesday</Option>
            <Option value="Thursday">Thursday</Option>
            <Option value="Friday">Friday</Option>
          </Select>
        </Menu>

        <Switch>
          <Route exact="exact" path="/" render={() => <Feed updateDay={this.updateDay} info={this.state.info} day={this.state.day}/>}/>
          <Route exact="exact" path="/week" render={() => <WeekView week={this.state.week}/>}/>
        </Switch>

      </React.Fragment>
    </Router>);
  }
}
export default Header
