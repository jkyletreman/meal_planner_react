import React, { Component } from "react";
import FoodCard from "./FoodCard";
import "../css/Feed.css";
/* Each FoodCard component needs a
      - img url
      - title
      - description (short)
      - avatar img (user) // this is not coming from the database currently */

export default class Feed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="feed-flex">
        {this.props.info.map(card => (
          <div className="food-card-spacing">
            <FoodCard
              className="food-card-main"
              key={card.id}
              info={card}
              day={this.props.day}
              updateDayWithRecipe={this.props.updateDayWithRecipe}
            />
          </div>
        ))}
      </div>
    );
  }
}
