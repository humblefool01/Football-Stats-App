import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';


class Result extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Result">
            <nav>
                <h1>Search Result</h1>            
            </nav>
            </div>
        );
    }
}

export default Result;
