import React from 'react'; 
import {useState, useEffect} from 'react-router-dom';
import './App.css';
import { runInThisContext } from 'vm';

class Result extends React.Component {        

    constructor(props) {        
        super(props);
        this.index = -1;              
        this.url = "";
        this.bundesliga = 'http://api.football-data.org/v2/competitions/2002/standings';
        this.epl = 'http://api.football-data.org/v2/competitions/2021/standings';  
        this.eredivise = 'http://api.football-data.org/v2/competitions/2003/standings';
        this.laliga = 'http://api.football-data.org/v2/competitions/2014/standings';
        this.ligue1 = 'http://api.football-data.org/v2/competitions/2015/standings';
        this.seriea = 'http://api.football-data.org/v2/competitions/2034/standings';
        /*
        2000: WC
        2001: USL
        2002: Bundesliga
        2021: EPL
        2003: Eredivise
        2014: LaLiga
        2015: Ligue 1
        2034: SerieA
        */
    }
    componentDidMount() {
        console.log("Result componentDidMount");
        switch (this.index) {
            case 0:
                this.url = this.bundesliga;
                break;
            case 1:
                    this.url = this.laliga;
                break;
            case 2:
                    this.url = this.epl;
                break;
            case 3:
                    this.url = this.seriea;
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
        this.fetchItems();
    }

    fetchItems = async () => {
                
        const data = await fetch(this.url, {
            method: 'GET',
            headers: {
                'X-AUTH-TOKEN': '2df120a38d634333bc4c7a5c2a0c4cba',
            }
        })
        const items = await data.json();
        console.log(items);
    }


    render() { 
        this.index = this.props.location.data;
        console.log("In Result Render()", this.index);
        // console.log("This-> ", this.index);
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
