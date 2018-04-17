import React, { Component } from "react";
import FoodCard from "./FoodCard";
import "../css/Feed.css"
/* Each FoodCard component needs a
      - img url
      - title
      - description (short)
      - avatar img (user) // this is not coming from the database currently */
const grid = {
  display: "grid",
  gridGap: "4rem",
};

export default class Feed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={grid} className="feed-flex">
        {this.props.info.map(card => (
          <div style={{ marginTop: "8%" }}>
            <FoodCard
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
