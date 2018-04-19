import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DesktopHeader from "./components/js/Header";
import Feed from "./components/js/Feed";
import WeekView from "./components/js/WeekView";
import IngredientsList from "./components/js/IngredientsList";
import MobileNav from "./components/js/MobileNav";
import "./App.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      day: "Monday",
      info: [],
      week: {
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: []
      },
      screenSize: window.innerWidth
    };
    this.setDayForRecipes = this.setDayForRecipes.bind(this);
    this.updateDayWithRecipe = this.updateDayWithRecipe.bind(this);
  }

  componentWillMount() {
    this.getCards();
  }
  //
  async getCards() {
    const res = await fetch("https://feedme-node-api.herokuapp.com/api/smallCards");
    const cards = await res.json();
    this.setState({ info: cards });
  }

  setDayForRecipes(value) {
    this.setState({ day: value });
  }

  updateDayWithRecipe(info) {
    const day = this.state.day;

    switch (day) {
      case "Monday":
        const monday = this.state.week.Monday;
        monday.push(info);
        this.setState((this.state.week.Monday = monday));
        break;

      case "Tuesday":
        const tuesday = this.state.week.Tuesday;
        tuesday.push(info);
        this.setState((this.state.week.Tuesday = tuesday));
        break;

      case "Wednesday":
        const wednesday = this.state.week.Wednesday;
        wednesday.push(info);
        this.setState((this.state.week.Wednesday = wednesday));
        break;

      case "Thursday":
        const thursday = this.state.week.Thursday;
        thursday.push(info);
        this.setState((this.state.week.Thursday = thursday));
        break;

      case "Friday":
        const friday = this.state.week.Friday;
        friday.push(info);
        this.setState((this.state.week.Friday = friday));
        break;

      default:
        console.log("nope");
    }
  }
  render() {
    const { screenSize } = this.state;
    const isMobile = screenSize <= 500;

    if (isMobile) {
      return (
        <Router>
          <React.Fragment>
            <MobileNav setDayForRecipes={this.setDayForRecipes}/>
            <Switch>
              <Route
                exact="exact"
                path="/"
                render={() => (
                  <Feed
                    updateDayWithRecipe={this.updateDayWithRecipe}
                    info={this.state.info}
                    day={this.state.day}
                  />
                )}
              />
              <Route
                exact="exact"
                path="/week"
                render={() => <WeekView week={this.state.week} />}
              />
              <Route
                exact="exact"
                path="/list"
                render={() => <IngredientsList week={this.state.week} />}
              />
            </Switch>
          </React.Fragment>
        </Router>
      );
    } else {
      return (
        <Router>
          <div className="main-wrapper">
            <DesktopHeader setDayForRecipes={this.setDayForRecipes} />
            <Switch>
              <Route
                exact="exact"
                path="/"
                render={() => (
                  <Feed
                    updateDayWithRecipe={this.updateDayWithRecipe}
                    info={this.state.info}
                    day={this.state.day}
                  />
                )}
              />
              <Route
                exact="exact"
                path="/week"
                render={() => <WeekView week={this.state.week} />}
              />
              <Route
                exact="exact"
                path="/list"
                render={() => <IngredientsList week={this.state.week} />}
              />
            </Switch>
          </div>
        </Router>
      );
    }
  }
}
