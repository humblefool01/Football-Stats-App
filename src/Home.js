import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class Home extends React.Component {    

    constructor (props) {
        super(props);
        this.state = {
            index: null,
        };
    }

    render() {
        console.log("In Home render");

        const images = ["logos/laliga-logo.png", "logos/ucl-logo.png", "logos/bundesliga-logo.png", "logos/epl-logo.png", "logos/ligue1-logo.png", "logos/eredivise-logo.png"]
        const row1 = [], row2 = [];
        for (const [index, value] of images.entries()) {            
            if (index < 3) {                
                row1.push(                                 
                    <button className="column" key={index} onClick={() => this.ButtonClicked(index)}>
                        <Link to={{pathname: "/result", data: index}}>
                            <img src={value} className="container" alt=""></img>
                        </Link>
                    </button>
                );
            }else {
                row2.push(                
                    <button className="column" key={index} onClick={() => this.ButtonClicked(index)}>
                        <Link to={{pathname: "/result", data: index}}>
                            <img src={value} className="container" alt=""></img>
                        </Link>
                    </button>
                );
            }
          }
        return (
                <div className="Home">
                    <nav>
                        <h1>Football Stats</h1>            
                    </nav>
                    <div className="row">
                        {row1}
                    </div>
                    <div className="row">
                        {row2}
                    </div>
                </div>        
        );
    }

    ButtonClicked(id) {
        this.setState({
            index: id,            
        }, () => {console.log("Index: ", this.state.index);});                
    }
}

export default Home;
