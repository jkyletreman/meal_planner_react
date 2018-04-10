import React from 'react';
import { Divider } from 'antd';
import "../css/WeekView.css"

const WeekView = (props) =>
    <div>
      <h2 style={{margin: "0 auto", textAlign: "center", fontSize: '30px'}}>Your Weekly Dashboard</h2>
      <Divider dashed />
      {Object.entries(props.week).map(([day, recipes]) =>
        <Day name={day} recipes={recipes}/>
      )}
    </div>


const Day = ({name, recipes=[]}) =>
  <div>
    <Divider orientation="left">{name}</Divider>
    <div>
    {recipes.map(recipe =>
      <p style={{ fontSize: "20px" }}>{recipe.name}</p>
    )}</div>
  </div>

export default WeekView;
