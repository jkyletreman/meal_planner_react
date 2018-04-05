import React, { Component } from "react";

export default class IngredientsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ids: [],
      ingredients: [],
      mealsSelected: false
    };
    this.getIngredients = this.getIngredients.bind(this);
    this.setIds = this.setIds.bind(this);
    this.toIngredientsObject = this.toIngredientsObject.bind(this);
  }

  async getIngredients() {
    const request = await fetch(`/api/ingredients?ids=${this.state.ids}`);
    const response = await request.json();
    this.setState({ ingredients: response });
  }

  componentWillMount() {
    this.setIds();
  }

  setIds() {
    const ids = [];
    const arrayArrayObject = Object.values(this.props.week);

    for (var i = 0; i < arrayArrayObject.length; i++) {
      var innerArray = arrayArrayObject[i];

      for (var j = 0; j < innerArray.length; j++) {
        var innerObject = innerArray[j];
        var id = innerObject.id;
        ids.push(id);
      }
    }
    // because setState is async need to pass conditionals as callbacks
    this.setState({ ids: ids }, () => {
      const ids = this.state.ids;

      if (ids.length > 0) {
        this.setState({ mealsSelected: true }, () => {
          if (this.state.mealsSelected) {
            this.getIngredients();
          }
        });
      }
    });
  }

  toIngredientsObject(array) {
    const newObj = {};

    array.map(object => {
      const name = object.name;
      const id = object.id;
      const amount = object.amount;
      const unit = object.unit;

      if (!newObj[name]) {
        newObj[name] = {
          id,
          amount,
          unit
        };
      } else {
        newObj[name].amount += amount;
      }
    });
    return newObj;
  }

  render() {
    const ingredientObject = this.toIngredientsObject(this.state.ingredients);
    const ingredientsToDisplay = Object.entries(ingredientObject);
    console.log(ingredientsToDisplay);
    // when mapped over position 0 will be the name and position 1 will be the data
    return (
      <React.Fragment>
        {this.state.mealsSelected ? (
          ingredientsToDisplay.map(ingredient => {
            return (
              <div key={ingredient[1].id}>
                <p>{ingredient[0]}</p>
                <p>{ingredient[1].amount}</p>
                <p>{ingredient[1].unit}</p>
              </div>
            );
          })
        ) : (
          <p>No Meals Selected</p>
        )}
      </React.Fragment>
    );
  }
}
