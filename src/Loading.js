import React from 'react'; 
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import PointsTable from './PointsTable';
// import { runInThisContext } from 'vm';

class Loading extends React.Component {        

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
        this.name = "";
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
                this.name="La Liga";
                break;
            case 1:
                    this.url = this.ucl;
                    this.name = "UEFA Champions League";
                break;
            case 2:
                    this.url = this.bundesliga;
                    this.name = "Bundesliga";
                break;
            case 3:
                    this.url = this.epl;
                    this.name = "Premier League";
                break;
            case 4:
                    this.url = this.ligue1;
                    this.name = "Ligue 1";
                break;
            case 5:
                    this.url = this.eredivise;
                    this.name = "Eredivise";
                break;
            default:
                console.log("Switch case default error!");
                break;
        }

        this.data = await this.fetchData();
        if (this.data != null) {
            this.setState({
                received: true,
            })
        }
    }


    async fetchData() {
        const rawData = await fetch(this.url, {
            method: 'GET',
            headers: {
                'X-AUTH-TOKEN': '2df120a38d634333bc4c7a5c2a0c4cba',
            }
        })
        const dataJSON = await rawData.json();
        
        return dataJSON;
    }

    render() { 
        var backgroungImg = [];
        this.buttonID = this.props.location.data;
        if (this.data == null) {
            return (
                <div className="loader">                
                </div>
            );
        }
        else {
            switch (this.buttonID) {
                case 0:
                        backgroungImg.push(<img className="BackgroundImgLaliga"></img>);
                    break;
                case 1:
                        backgroungImg.push(<img className="BackgroundImgUCL"></img>);
                    break; 
                case 2:
                        backgroungImg.push(<img className="BackgroundImgBundesliga"></img>);
                    break;
                case 3:
                        backgroungImg.push(<img className="BackgroundImgEPL"></img>);
                    break;
                case 4:
                        backgroungImg.push(<img className="BackgroundImgLigue1"></img>);
                    break;
                case 5:
                        backgroungImg.push(<img className="BackgroundImgEredivise"></img>);
                    break;
            }
            return (
                <div>
                    <nav><h1>{this.name}</h1></nav>
                    <div className="PointsTablePage">
                    <PointsTable id={this.buttonID} data={this.data} />                    
                    </div>
                    {/* <div>
                        {backgroungImg}
                    </div> */}
                </div>
            );            
        }                                             

    }
}

export default Loading;
