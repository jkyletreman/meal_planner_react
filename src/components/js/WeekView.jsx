import React from 'react';
import { Divider } from 'antd';

const WeekView = (props) =>
    <div>
      <h2>Your Weekly Dashboard</h2>
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
      <p>{recipe.name}</p>
    )}</div>
  </div>

export default WeekView;
