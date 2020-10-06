import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

// Pages
import HomePage from './pages/homepage.component.jsx';

//Components
import Header from './components/header/header.component.jsx';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
