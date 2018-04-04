import React, { Component } from "react";

export default class IngredientsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ids: []
    };
    this.getIngredients = this.getIngredients.bind(this);
    this.setIds = this.setIds.bind(this);
  }

  async getIngredients() {
    const request = await fetch("/api/ingredients", {
      method: "GET",
      qs: '1 2 3'
    });
    const response = request.json();
  }

  componentWillMount() {
    const ingredients = this.getIngredients() || null;
    console.log(ingredients);
  }

  setIds() {
    const ids = [] || "null";
    const arrayArrayObject = Object.values(this.props.week);

    for (var i = 0; i < arrayArrayObject.length; i++) {
      var innerArray = arrayArrayObject[i];

      for (var j = 0; j < innerArray.length; j++) {
        var innerObject = innerArray[j];
        var id = innerObject.id;
      }
    }
    this.setState({ ids: id });
  }

  render() {
    return (
      <div>
        {this.state.ids.map(id => {
          <p>{id}</p>;
        })}
      </div>
    );
  }
}
