import React, { Component } from 'react';
// import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { concat } from 'rxjs';

class PointsTable extends React.Component{
    constructor(props) {
        super(props);        
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
                uclQ = 0;                
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
            table.push(this.Dummy());
            for (let i=0; i<leagueTableData.length; i++) {
                const row = [];  
                if (i+1 <= uclQ) {
                    row.push(<td><div className="TdUcl">{i+1}</div></td>);    
                }
                else {
                    row.push(<td>{i+1}</td>);    
                }              
                // row.push(<td className="TdUcl">{i+1}</td>);
                row.push(<td><div className="TeamClass"><img className="ImgLogo" src={leagueTableData[i].team.crestUrl} alt=""></img><span>{leagueTableData[i].team.name}</span></div></td>);
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
                    <table className="TableCard">  
                        <tbody>     
                            {table}
                        </tbody>
                    </table>            
            )
        } else {
            console.log("TableData: ", tableData);
            const dummy = [];
            for (let i=0; i< tableData.standings.length; i+=3) {
                this.groupName = tableData.standings[i].group;
                table = [];
                table.push(this.Dummy());
                for (let j=0; j<tableData.standings[i].table.length; j++) {                                        
                    const groupTable = tableData.standings[i].table[j];
                    const row = [];
                    row.push(<td>{j+1}</td>);
                    row.push(<td><div className="TeamClass"><img className="ImgLogo" src={groupTable.team.crestUrl} alt=""></img><span>{groupTable.team.name}</span></div></td>);
                    row.push(<td>{groupTable.playedGames}</td>);
                    row.push(<td>{groupTable.won}</td>);
                    row.push(<td>{groupTable.draw}</td>);
                    row.push(<td>{groupTable.lost}</td>);
                    row.push(<td>{groupTable.points}</td>);
                    row.push(<td>{groupTable.goalsFor}</td>);
                    row.push(<td>{groupTable.goalsAgainst}</td>);
                    row.push(<td>{groupTable.goalDifference}</td>);

                    table.push(<tr>{row}</tr>);
                }
                dummy.push(<table className="TableCard">  
                            <div className="GroupName"><b>{this.groupName}</b></div>
                            <tbody>     
                                {table}
                            </tbody>
                        </table>);
                // table = [];
            }
            return (<div>{dummy}</div>    
            );
        }
    }

    Dummy() {
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
