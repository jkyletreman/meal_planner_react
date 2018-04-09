import React, { Component } from "react";
import FoodCard from "./FoodCard";
/* Each FoodCard component needs a
      - img url
      - title
      - description (short)
      - avatar img (user) // this is not coming from the database currently */
const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 12fr)",
  gridGap: "4%",
  margin: "0 auto",
  maxWidth: "100vw"
};

export default class Feed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={grid}>
        {this.props.info.map(card => (
          <div style={{ marginTop: "8%" }}>
            <FoodCard
              key={card.id}
              info={card}
              day={this.props.day}
              updateDay={this.props.updateDay}
            />
          </div>
        ))}
      </div>
    );
  }
}
