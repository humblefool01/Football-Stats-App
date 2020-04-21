import React from 'react';

class TeamDetails extends React.Component {
    constructor(props) {
        super(props);
        this.data = null;
        this.url = "http://api.football-data.org/v2//teams/";
        this.state = {
            received: false,
        }
    }

    async componentDidMount() {
        const team = this.props.location.data;
        this.url += team;
        console.log(this.url);
        this.data = await this.fetchData(this.url);
        if (this.data != null) {
            this.setState({
                received: true,
            })
        }
    }

    async fetchData(url) {
        const rawData = await fetch(url, {
            method: 'GET',
            headers: {
                'X-AUTH-TOKEN': '2df120a38d634333bc4c7a5c2a0c4cba',
            }
        })
        const dataJSON = await rawData.json();
        console.log("JSON: ", dataJSON);
        return dataJSON;
    }

    render () {        
        if (this.data == null) {
            return (
                <div className="loader">                
                </div>
            )
        }
        else {
            var managerCard = [], goalkeepersCard = [], defendersCard = [], midfieldersCard = [], attackersCard = []; 
            var manager = [], goalkeepers = [], defenders = [], midfielders = [], attackers = [];            
            
            console.log(this.data.squad.length);
            for (let i=0; i<this.data.squad.length; i++) {
                if (this.data.squad[i].role == "PLAYER") {
                    switch(this.data.squad[i].position) {
                        case "Goalkeeper":
                            goalkeepers.push(<tr>{this.data.squad[i].name}</tr>);    
                            break;
                        case "Defender":
                            defenders.push(<tr>{this.data.squad[i].name}</tr>);
                            break;
                        case "Midfielder":
                            midfielders.push(<tr>{this.data.squad[i].name}</tr>);
                            break;
                        default:
                            attackers.push(<tr>{this.data.squad[i].name}</tr>);
                            break;
                    }
                } else {
                    manager.push(<tr>{this.data.squad[i].name}</tr>)
                }
            }

            managerCard.push(<table className="TableCard">
                <h2>Manager</h2>
                <tbody>
                    {manager}
                </tbody>
            </table>)

            goalkeepersCard.push(<table className="TableCard">
                <h2>Goalkeepers</h2>
                <tbody>
                    {goalkeepers}
                </tbody>
            </table>)

            defendersCard.push(<table className="TableCard">
                <h2>Defenders</h2>
                <tbody>
                    {defenders}
                </tbody>
            </table>)

            midfieldersCard.push(<table className="TableCard">
                <h2>Midfielders</h2>
                <tbody>
                    {midfielders}
                </tbody>
            </table>)

            attackersCard.push(<table className="TableCard">
                <h2>Attackers</h2>
                <tbody>
                    {attackers}
                </tbody>
            </table>)

            return (
                <div>
                    <nav>
                        <div>
                        <img className="TeamDetailsLogo" src={this.data.crestUrl} alt="" style={{float: "left"}}></img>                            
                        <h1 style={{float: "right"}}>{this.data.name}</h1>
                        </div>
                    </nav>
                    <div>{managerCard}</div>
                    <div>{goalkeepersCard}</div>
                    <div>{defendersCard}</div>
                    <div>{midfieldersCard}</div>
                    <div>{attackersCard}</div>
                </div>                
            )
        }
    }
}
export default TeamDetails;