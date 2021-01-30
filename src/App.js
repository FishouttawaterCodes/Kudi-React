import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages';
import SignIn from './pages/SignIn';

import './App.css';

function App() {
  return (
    <>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SignIn} exact />
      </Switch>
    </>
  );
}

export default App;
