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
        const table = [];
        const header = [];
        header.push(<th>Pos</th>);
        header.push(<th>Team Name</th>);
        header.push(<th>Matches</th>);
        header.push(<th>Won</th>);
        header.push(<th>Draw</th>);
        header.push(<th>Lost</th>);
        header.push(<th>Pts</th>);
        header.push(<th>GF</th>);
        header.push(<th>GA</th>);
        header.push(<th>GD</th>);
        table.push(<tr>{header}</tr>);

        for (let i=0; i<tableData.length; i++) {
            const row = [];
            row.push(<td>{i+1}</td>);
            row.push(<td><div className="TeamClass"><img className="ImgLogo" src={tableData[i].team.crestUrl} alt=""></img><span>{tableData[i].team.name}</span></div></td>);
            row.push(<td>{tableData[i].playedGames}</td>);
            row.push(<td>{tableData[i].won}</td>);
            row.push(<td>{tableData[i].draw}</td>);
            row.push(<td>{tableData[i].lost}</td>);
            row.push(<td>{tableData[i].points}</td>);
            row.push(<td>{tableData[i].goalsFor}</td>);
            row.push(<td>{tableData[i].goalsAgainst}</td>);
            row.push(<td>{tableData[i].goalDifference}</td>);

            table.push(<tr>{row}</tr>)
        }
        return(
                <table className="TableCard">  
                    <tbody>     
                        {table}
                    </tbody>
                </table>            
        )
    }

    Dummy() {
    }
    
}

export default PointsTable;
