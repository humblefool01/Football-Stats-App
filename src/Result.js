import React from 'react'; 
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Dummy from './Dummy';
// import { runInThisContext } from 'vm';

class Result extends React.Component {        

    constructor(props) {        
        super(props);
        this.data = null;
        this.buttonID = -1;           
        this.url = "";
        this.bundesliga = 'http://api.football-data.org/v2/competitions/2002/standings';
        this.ucl = 'http://api.football-data.org/v2/competitions/2001/standings';
        this.epl = 'http://api.football-data.org/v2/competitions/2021/standings';  
        this.eredivise = 'http://api.football-data.org/v2/competitions/2003/standings';
        this.laliga = 'http://api.football-data.org/v2/competitions/2014/standings';
        this.ligue1 = 'http://api.football-data.org/v2/competitions/2015/standings';
        this.seriea = 'http://api.football-data.org/v2/competitions/2034/standings';

        this.state = {
            received: false,
        }
        /*
        2000: WC
        2001: UCL
        2002: Bundesliga
        2021: EPL
        2003: Eredivise
        2014: LaLiga
        2015: Ligue 1
        2034: SerieA
        */
    }
    
    async componentDidMount() {
        switch (this.buttonID) {
            case 0:
                this.url = this.laliga;
                break;
            case 1:
                    this.url = this.ucl;
                break;
            case 2:
                    this.url = this.bundesliga;
                break;
            case 3:
                    this.url = this.epl;
                break;
            case 4:
                    this.url = this.ligue1;
                break;
            case 5:
                    this.url = this.eredivise;
                break;
            default:
                console.log("Switch case default error!");
                break;
        }

        this.data = await this.fetchData();
        console.log("Retrieved Data: ", this.data);
        if (this.data != null) {
            this.setState({
                received: true,
            })
        }
        // this.render();
    }


    async fetchData() {
        const rawData = await fetch(this.url, {
            method: 'GET',
            headers: {
                'X-AUTH-TOKEN': '2df120a38d634333bc4c7a5c2a0c4cba',
            }
        })
        const dataJSON = await rawData.json();
        
        console.log(dataJSON.standings[0].table[0].team.name);
        return dataJSON;
    }

    render() { 
        this.buttonID = this.props.location.data;
        if (this.data == null) {
            console.log("Data yet to be received...");
            return (
                <div className="Result">
                    <nav>
                        <h1>Loading...</h1>            
                    </nav>                    
                </div>
            );
        }
        else {
            console.log("Data received!");
            return (
            <div>
                <Dummy data={this.data} />
            </div>
            );            
        }                                             

    }
}

export default Result;
