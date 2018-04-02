import React from 'react';
import { Divider } from 'antd';

const WeekView = () => {
  return (
    <div>
      <Divider dashed />
      <h2>Your Weekly Dashboard</h2>
      <Divider orientation="left">Monday</Divider>
      <p>No Meals Selected...</p>
      <Divider orientation="left">Tuesday</Divider>
      <p>No Meals Selected...</p>
      <Divider orientation="left">Wednesday</Divider>
      <p>No Meals Selected...</p>
      <Divider orientation="left">Thursday</Divider>
      <p>No Meals Selected...</p>
      <Divider orientation="left">Friday</Divider>
      <p>No Meals Selected...</p>
      <Divider dashed />
    </div>
)};
export default WeekView;
