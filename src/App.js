import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Result from './Result';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home}></Route>      
        <Route path="/result" exact component={Result}></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
