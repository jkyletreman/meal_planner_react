import React from 'react';
import { Divider } from 'antd';

const WeekView = () => {
  return (
    <div>
      <Divider dashed />
      <h2>Your Weekly Dashboard</h2>
      <Divider orientation="left">Monday</Divider>
      <p>Today is ...</p>
      <Divider orientation="left">Tuesday</Divider>
      <p>Today is ...</p>
      <Divider orientation="left">Wednesday</Divider>
      <p>Today is ...</p>
      <Divider orientation="left">Thursday</Divider>
      <p>Today is ...</p>
      <Divider orientation="left">Friday</Divider>
      <p>Today is ...</p>
      <Divider dashed />
    </div>
)};
export default WeekView;
