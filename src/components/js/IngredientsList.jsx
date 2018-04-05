import React, { Component } from "react";
import { Table } from "antd"

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
  // take the selected meals and hold the database ids
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
  // aggregating duplicates and creating a object with each ingredient as a key and all the information as values for antd
  toIngredientsObject(array) {
    const newObj = {};

    array.map(object => {
      const name = object.name;
      const key = object.id;
      const amount = object.amount;
      const unit = object.unit;

      if (!newObj[name]) {
        newObj[name] = {
          key,
          name,
          amount,
          unit
        };
      } else {
        newObj[name].amount += amount;
        if (newObj[name].unit.slice(-1) !== 's') {
          newObj[name].unit += 's';
        }
      }
    });
    return newObj;
  }

  render() {
    const ingredientObject = this.toIngredientsObject(this.state.ingredients);
    const ingredientsToDisplay = Object.values(ingredientObject);

    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Amount",
        dataIndex: "amount",
        key: "amount"
      },
      {
        title: "Unit",
        dataIndex: "unit",
        key: "unit"
      }
    ];
    // when mapped over position 0 will be the name and position 1 will be the data
    return (
      <React.Fragment>
        {this.state.mealsSelected ? (
            <Table columns={columns} dataSource={ingredientsToDisplay} />
        ) : (
          <p>No Meals Selected</p>
        )}
      </React.Fragment>
    );
  }
}
