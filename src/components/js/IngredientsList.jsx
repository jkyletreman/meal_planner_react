import React, { Component } from "react";
import { message, Table, Button } from "antd";
import "../css/IngredientsList.css";

export default class IngredientsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ids: [],
      ingredients: [],
      mealsSelected: false,
      number: ""
    };
    this.getIngredients = this.getIngredients.bind(this);
    this.setIds = this.setIds.bind(this);
    this.toIngredientsObject = this.toIngredientsObject.bind(this);
    this.sendIngredients = this.sendIngredients.bind(this);
    this.handleClickText = this.handleClickText.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  //
  async getIngredients() {
    const request = await fetch(
      `https://feedme-node-api.herokuapp.com/api/ingredients?ids=${
        this.state.ids
      }`
    );
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
        if (newObj[name].unit.slice(-1) !== "s") {
          newObj[name].unit += "s";
        }
      }
    });
    return newObj;
  }

  handleClickText() {
    const ingredients = this.toIngredientsObject(this.state.ingredients);
    var messageString = "";

    const message = Object.values(ingredients).map(object => {
      for (var value in object) {
        if (value !== "key") {
          // console.log(object[value])
          messageString += `${object[value]} `;
        }
      }
    });
    this.sendIngredients(messageString);
  }

  async sendIngredients(message) {
    fetch("/api/send", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        toNumber: `1${this.state.number}`,
        message: message
      })
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.createProduct(this.state);
  }

  handleChange(e) {
    this.setState({ number: e.target.value });
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
    const info = () => {
      message.info(`Shopping List Texted to ${this.state.number}`);
      this.handleClickText();
    };
    // when mapped over position 0 will be the name and position 1 will be the data
    return (
      <div style={{ paddingTop: "1rem", width: "100%" }}>
        {this.state.mealsSelected ? (
          <React.Fragment>
            <Table
              style={{
                backgroundColor: "white",
                margin: "0 auto",
                padding: "2rem auto"
              }}
              columns={columns}
              dataSource={ingredientsToDisplay}
            />
            <div className="form-container">
              <div className="left-form-column">
                <div className="left-form-flex">
                <h3 className="form-text">Enter Your Number</h3>
                <form onSubmit={this.handleSubmit}>
                  <div>
                    <input
                      className="form-input"
                      type="text"
                      name="number"
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                  </div>
                </form>
              </div>
            </div>
              <div className="right-form-column">
                <div className="right-form-flex">
                <h3 className="form-item">Text Your List</h3>
                {/* <input type="submit" value="Add a Product" /> */}
                <Button onClick={info} type="primary" className="form-btn">
                  Text Ingredients
                </Button>
              </div>
            </div>
          </div>
          </React.Fragment>
        ) : (
          <h2
            style={{
              margin: "0 auto",
              textAlign: "center",
              fontSize: "30px"
            }}
          >
            No Meals Selected
          </h2>
        )}
      </div>
    );
  }
}
