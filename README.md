## Feed ME 
### A Meal Planning App in React

We all have to eat, but that simple task can become tedious and time consuming, especially during the week. Feed Me, is a meal planner app uses that premise to make planning, scheduling and buying a weeks worth of meals easy. Users are able to select their meals, add them to a day of the week, view their shopping list and receive that list texted to them. Feed Me built with React, React Router, NodeJS, PostgreSQL, Electron, CircleCi and Ant Design.

#### build steps
- Created w create-react-app
- Added ESLint, airbnb style guide
- Added CircleCI
- Added Ant design
  * Added Card views
- Api Express Server PostgreSQL backend
- Seed data
- data to React via proxy
- Added weekly view
- Added Header
- Add Router
- Refractored Nav to be contained within the Header
- Writing functions that pass card info back up to parent
- Setting the state with the selected cards
- Passing the cards to the weekly view
- Moved state up to Header
- State now managing cards selected
- Weekly view rendering Day component with recipe information
- Added IngredientsList view
- Added ingredients query to server and fetch from front end
- Add data vis to response 
