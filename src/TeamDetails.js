import React from 'react';

class TeamDetails extends React.Component {
    constructor(props) {
        super(props);        
    }
    render () {
        const team = this.props.location.data;
        return (
            <div>TeamDetails {team}</div>
        )
    }
}
export default TeamDetails;