import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Loading from './Loading';
import TeamDetails from './TeamDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}></Route>                     
          <Route path="/result" exact component={Loading}></Route>
          <Route path="/TeamDetails" exact component={TeamDetails}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
