import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Result from './Result';
// import Dummy from './Dummy';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Home /> */}
        <Switch>
          <Route path="/" exact component={Home}></Route>                     
          <Route path="/result" exact component={Result}></Route>
          {/* <Route path="/dummy" exact component={Dummy}></Route> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
