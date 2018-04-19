import React from "react";
import { Card, Avatar, message, Icon } from "antd";
import Popup from "./Popup"
import "antd/dist/antd.css";
import "../css/FoodCard.css";

const { Meta } = Card;

export default class FoodCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickAdd = this.handleClickAdd.bind(this);
  }
  handleClickAdd() {
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
          style={{ boxShadow: "1.5px 1.5px 1.5px black" }}
          actions={[
            <Icon onClick={this.handleClickAdd} type="plus-circle-o" />,
            <Popup recipeId={this.props.info.id}/>
          ]}
          cover={
            <img
              className="feed-food-card-img"
              alt="example"
              src={this.props.info.img}
            />
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
