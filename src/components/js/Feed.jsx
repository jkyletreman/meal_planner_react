import React, { Component } from 'react';
import FoodCard from './FoodCard';
/* Each FoodCard component needs a
      - img url
      - title
      - description (short)
      - avatar img (user)
*/
export default class Feed extends Component {
  constructor() {
    super();
    this.state = {
      info: []
    }
  }
  componentDidMount() {
    this.getCards()
  }
  async getCards() {
    const res = await fetch('/api/smallCards');
    const cards = await res.json();
    this.setState({ info: cards })
  }
  render() {
    return (
      <div>
        {this.state.info.map(card => {
          return <FoodCard key={card.id} info={ card } /> // TODO: pass avatar
          }
        )}
     </div>
    )
  }
}
