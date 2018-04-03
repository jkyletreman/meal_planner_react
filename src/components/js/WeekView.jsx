import React from 'react';
import { Divider } from 'antd';

// const WeekView = (props) => {
//     const { Monday } = props.week
//     return Monday[0] === undefined ? <p>'No Meals Selected...'</p> : <p>{Monday[0].name}</p>
// };
const WeekView = (props) =>
    <div>
      <Divider dashed />
      <h2>Your Weekly Dashboard</h2>
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
