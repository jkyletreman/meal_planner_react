import React from 'react';
import { Card, Icon, Avatar } from 'antd';
import 'antd/dist/antd.css';

const { Meta } = Card;
/* eslint arrow-body-style: [0] */
const FoodCard = ({ info: { cardImg, description, avatar, title }}) => {
  return (
    <React.Fragment>
      <Card
        hoverable
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src={ cardImg }
          />}
        actions={[
          <Icon type="setting" />,
          <Icon type="edit" />,
          <Icon type="ellipsis" />,
        ]}
      >
        <Meta
          avatar={
            <Avatar src={ avatar }
            />}
          title={ title }
          description={ description }
        />
      </Card>
    </React.Fragment>
  );
};
export default FoodCard;
