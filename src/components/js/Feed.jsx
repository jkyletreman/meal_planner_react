import React from 'react';
import FoodCard from './FoodCard';
/* Each Card component needs a
      - img url
      - title
      - description (short)
      - avatar img (user)
*/
const cardInfo = {
  cardImg: 'https://image.ibb.co/dqbPun/food_img1.jpg',
  avatar: 'https://image.ibb.co/eML677/Profile.jpg',
  description: 'This is a description',
  title: 'This is a title',
};
/* eslint arrow-body-style: [0] */
const Feed = () => {
  return (
    <React.Fragment>
      <FoodCard info={cardInfo} />
    </React.Fragment>
  );
};
export default Feed;
