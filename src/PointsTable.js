import React, { Component } from 'react';
// import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { concat } from 'rxjs';

class PointsTable extends React.Component{
    constructor(props) {
        super(props);        
    }
    render() {
        return(
            <div>Table
                {console.log(this.props.data)}
            </div>
        )
    }
}

export default PointsTable;