import React from "react";
import { Divider } from "antd";
import "../css/WeekView.css";

const headerStyle = {
  margin: "0 auto",
  textAlign: "center",
  fontSize: "30px"
};

const textStyle = {
  fontSize: "20px",
  color: "#ED5147",
  letterSpacing: "2px",
  fontWeight: "400",
  textAlign: 'center'
};

const scheduleContainer = {
  padding: "3rem",
  margin: "2rem",
};

const WeekView = props => (
  <div style={{scheduleContainer}}>
    <h2 style={headerStyle}>Your Weekly Dashboard</h2>
    <Divider dashed />
    {Object.entries(props.week).map(([day, recipes]) => (
      <Day name={day} recipes={recipes} />
    ))}
  </div>
);

const Day = ({ name, recipes = [] }) => (
  <div>
    <Divider orientation="left">{name}</Divider>
    <div>{recipes.map(recipe => <p style={textStyle}>{recipe.name}</p>)}</div>
  </div>
);

export default WeekView;
