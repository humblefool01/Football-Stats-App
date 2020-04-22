import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { concat } from 'rxjs';

class PointsTable extends React.Component{
    constructor(props) {
        super(props);        
        this.state = {
            teamClicked: false,
        }
    }
    render() {
        const id = this.props.id;
        const tableData = this.props.data;
        const leagueTableData = tableData.standings[0].table;
        var uclQ;
        var table = [];
        var groupName = "";

        switch (id) {
            case 1:
                uclQ = 2;                
                break;
            case 4:
                uclQ = 2;
                break;
            case 5:      
                uclQ = 0;          
                break;
            default:
                uclQ = 4;
                break;
        }

        if (id != 1) {
            table.push(this.TableHeader());
            for (let i=0; i<leagueTableData.length; i++) {
                const row = [];  
                if (i+1 <= uclQ) {
                    row.push(<td><div className="TdUcl">{i+1}</div></td>);    
                }
                else {
                    row.push(<td>{i+1}</td>);    
                }
                row.push(<td><Link className="LinkTag" to={{pathname: "/TeamDetails", data: leagueTableData[i].team.id}}>
                    <button key={i+1} className="TeamClass" onClick={() => {this.TeamButtonClicked(leagueTableData, i)}}>                            
                            <img className="ImgLogo" src={leagueTableData[i].team.crestUrl} alt=""></img>
                            <span style={{fontSize: "120%"}}>{leagueTableData[i].team.name}</span>
                        </button>
                        </Link>
                    </td>);
                row.push(<td>{leagueTableData[i].playedGames}</td>);
                row.push(<td>{leagueTableData[i].won}</td>);
                row.push(<td>{leagueTableData[i].draw}</td>);
                row.push(<td>{leagueTableData[i].lost}</td>);
                row.push(<td>{leagueTableData[i].points}</td>);
                row.push(<td>{leagueTableData[i].goalsFor}</td>);
                row.push(<td>{leagueTableData[i].goalsAgainst}</td>);
                row.push(<td>{leagueTableData[i].goalDifference}</td>);

                table.push(<tr>{row}</tr>)
            }         
            return(
                <div>
                    <table className="TableCard">  
                        <tbody>     
                            {table}
                        </tbody>
                    </table>    
                </div>        
            )
        } else {
            const outerCard = [];
            for (let i=0; i< tableData.standings.length; i+=3) {
                this.groupName = tableData.standings[i].group;
                table = [];
                table.push(this.TableHeader());
                for (let j=0; j<tableData.standings[i].table.length; j++) {
                    const groupTable = tableData.standings[i].table;
                    const row = [];
                    if (j+1 <= uclQ) {
                        row.push(<td><div className="TdUcl">{j+1}</div></td>);
                    }else {
                        row.push(<td>{j+1}</td>);
                    }
                    row.push(<td>
                        <Link className="LinkTag" to={{pathname: "/TeamDetails", data: groupTable[j].team.id}}>
                        <button className="TeamClass" onClick={() => {this.TeamButtonClicked(groupTable, j)}}><img className="ImgLogo" src={groupTable[j].team.crestUrl} alt=""></img><span>{groupTable[j].team.name}</span>
                        </button>
                        </Link>
                        </td>);
                    row.push(<td>{groupTable[j].playedGames}</td>);
                    row.push(<td>{groupTable[j].won}</td>);
                    row.push(<td>{groupTable[j].draw}</td>);
                    row.push(<td>{groupTable[j].lost}</td>);
                    row.push(<td>{groupTable[j].points}</td>);
                    row.push(<td>{groupTable[j].goalsFor}</td>);
                    row.push(<td>{groupTable[j].goalsAgainst}</td>);
                    row.push(<td>{groupTable[j].goalDifference}</td>);

                    table.push(<tr>{row}</tr>);
                }
                outerCard.push(<table className="TableCard">  
                            <div className="GroupName"><b>{this.groupName}</b></div>
                            <tbody>     
                                {table}
                            </tbody>
                        </table>);
            }
            return (<div>{outerCard}</div>    
            );
        }
    }

    TeamButtonClicked(leagueTableData, teamIndex) {
        console.log(leagueTableData[teamIndex].team.id, leagueTableData[teamIndex].team.name);
        this.setState({
            teamClicked: true,
        })
    }

    TableHeader() {
        const T = [];
        const header = [];
        header.push(<th>Pos</th>);
        header.push(<th className="Th_Team_name">Team</th>);
        header.push(<th>Matches</th>);
        header.push(<th>Won</th>);
        header.push(<th>Draw</th>);
        header.push(<th>Lost</th>);
        header.push(<th>Pts</th>);
        header.push(<th>GF</th>);
        header.push(<th>GA</th>);
        header.push(<th>GD</th>);
        T.push(<tr>{header}</tr>);
        return T;
    }
    
}

export default PointsTable;
