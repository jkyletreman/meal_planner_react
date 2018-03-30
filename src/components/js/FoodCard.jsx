import React from 'react';
import { Card, Icon, Avatar } from 'antd';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';

const { Meta } = Card;

const grid = {
  border: 'solid 1px black',
  gridColumn: 'span 3',
  backgroundColor: 'white',
  width: '300px',
}
/* eslint arrow-body-style: [0] */
const FoodCard = (props) => {
  const {
    info: {
      img,
      name,
      summary,
    } = {},
  } = props;

  return (
    <React.Fragment>
      <Card
        hoverable
        style={grid}
        cover={
          <img
            style={{height: 250}}
            alt="example"
            src={img}
          />}
        actions={[
          <Icon type="setting" />,
          <Icon type="edit" />,
          <Icon type="ellipsis" />,
        ]}
      >
        <Meta
          avatar={
            <Avatar src="https://image.ibb.co/eML677/Profile.jpg" />}
          title={name}
          description={summary}
        />
      </Card>
    </React.Fragment>
  );
};
FoodCard.defaultProps = {
  info: true,
};
FoodCard.propTypes = {
  info: PropTypes.shape({
    cardImg: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
  }),
};
export default FoodCard;
