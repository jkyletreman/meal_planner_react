import React, { Component } from 'react';
import FoodCard from './FoodCard';
/* Each FoodCard component needs a
      - img url
      - title
      - description (short)
      - avatar img (user) // this is not coming from the database currently */
const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  gridGap: '20px',
};

export default class Feed extends Component {
  constructor() {
    super();
    this.state = {
      info: [],
      week: {
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: []
      }
    };
    this.handleClick = this.handleClick.bind(this)
  }
  componentWillMount() {
    this.getCards();
  }
  async getCards() {
    const res = await fetch('/api/smallCards');
    const cards = await res.json();
    this.setState({ info: cards });
  }
  handleClick() {
    console.log('cool');
  }
  render() {
    return (
      <div style={grid}>
        {this.state.info.map(card =>
          <FoodCard key={card.id} info={card} onClick={this.handleClick}/>)}
      </div>
    );
  }
}
