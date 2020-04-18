import React, { Component } from 'react';
// import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { concat } from 'rxjs';

class Dummy extends React.Component{
    constructor(props) {
        super(props);        
    }
    render() {
        console.log("In Dummy!");
        return(
            <div>Dummy!
                {console.log(this.props.data)}
            </div>
        )
    }
}

export default Dummy;