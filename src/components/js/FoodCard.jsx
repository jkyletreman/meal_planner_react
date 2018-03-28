import React from 'react';
import { Card, Icon, Avatar } from 'antd';
import 'antd/dist/antd.css';

const { Meta } = Card;
/* eslint arrow-body-style: [0] */
const FoodCard = () => {
  return (
    <React.Fragment>
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />}
        actions={[
          <Icon type="setting" />,
          <Icon type="edit" />,
          <Icon type="ellipsis" />,
        ]}
      >
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
    </React.Fragment>
  );
};
export default FoodCard;
