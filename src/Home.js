import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import { logDOM } from '@testing-library/dom';

class Home extends React.Component {
    constructor (props) {
        super(props);
    }
    render() {
        const images = ["logos/bundesliga-logo.png", "logos/laliga-logo.png", "logos/epl-logo.png", "logos/seriea-logo.png", "logos/ligue1-logo.png", "logos/eredivise-logo.png"]
        const row1 = [], row2 = [];
        for (const [index, value] of images.entries()) {            
            if (index < images.length / 2) {
                row1.push(<button className="column" key={index}>
                        <img src={value} className="container"></img>
                    </button>)
            }else {
                row2.push(<button className="column" key={index}>
                        <img src={value} className="container"></img>
                    </button>)
            }
          }
        return (
                <div className="Home">
                    <nav>
                        <h1>Football Stats</h1>            
                    </nav>
                    <div className="row">
                        {row1}
                    </div>
                    <div className="row">
                        {row2}
                    </div>
                </div>        
        );
    }
    SearchButtonClicked() {
        var search = document.getElementById("search-box").value;
        console.log(search);
    }
}
export default Home;
