import React from 'react';
import Feed from './components/js/Feed';
import Header from './components/js/Header';
import WeekView from './components/js/WeekView';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <WeekView />
      {/* <Feed/> */}
    </React.Fragment>
  );
}

export default App;
