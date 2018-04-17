import React from "react";
import { Card, Avatar, message } from "antd";
import "antd/dist/antd.css";
import "../css/FoodCard.css"

const { Meta } = Card;

export default class FoodCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const info = this.props.info;
    this.props.updateDayWithRecipe(info);
    message.info(`Added to ${this.props.day}`);
  }

  render() {
    return (
      <React.Fragment>
          <Card
            className="feed-food-card"
            hoverable
            style={{boxShadow: "1.5px 1.5px 1.5px black"}}
            onClick={this.handleClick}
            cover={
              <img alt="example" src={this.props.info.img} />
            }
          >
            <Meta
              avatar={<Avatar src="https://image.ibb.co/eML677/Profile.jpg" />}
              title={this.props.info.name}
              description={this.props.info.summary}
            />
          </Card>
      </React.Fragment>
    );
  }
}
