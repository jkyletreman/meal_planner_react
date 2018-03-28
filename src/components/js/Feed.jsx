import React, { Component } from 'react';
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
  title: 'This is a title'
};
export default class Feed extends Component {
  render() {
    return (
      <React.Fragment>
        <FoodCard info={cardInfo} />
      </React.Fragment>
    )
  }
}
