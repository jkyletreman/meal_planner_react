import React from 'react';
import { Card, Icon, Avatar } from 'antd';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';

const { Meta } = Card;

const grid = {
  border: 'solid 1px black',
  gridColumn: 'span 3',
  backgroundColor: 'white',
  width: '300px',
};

export default class FoodCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const info = this.props.info
    this.props.updateDay(info)
  }
  render() {
    return (
      <React.Fragment >
        <div style={grid} >
        <Card
          hoverable
          onClick={this.handleClick}
          cover={
            <img
              style={{ height: 250 }}
              alt="example"
              src={this.props.info.img}
            />}
          actions={[
            <Icon type="plus-circle" />,
          ]}
        >
          <Meta
            avatar={
              <Avatar src="https://image.ibb.co/eML677/Profile.jpg" />}
            title={this.props.info.name}
            description={this.props.info.summary}
          />
        </Card>
      </div>
      </React.Fragment>
    );
  };
}
