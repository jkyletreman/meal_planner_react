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
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <Card
          hoverable
          style={grid}
          cover={
            <img
              style={{ height: 250 }}
              alt="example"
              src={this.props.info.img}
            />}
          actions={[
            <Icon type="plus-circle" onClick={this.props.onClick} />,
          ]}
        >
          <Meta
            avatar={
              <Avatar src="https://image.ibb.co/eML677/Profile.jpg" />}
            title={this.props.info.name}
            description={this.props.info.summary}
          />
        </Card>
      </React.Fragment>
    );
  };
}
