import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import './index.css';

class Header extends Component {
    handleLoginClick = () => {
        window.location = "/ind";
    }


    render() {
        return(
            <div className="header">
                <div className="col-md-2 logo">
                    Analytica
                </div>

                <div className="col-md-2 col-md-offset-8 login">
                    <Button bsStyle="primary" onClick={() => this.handleLoginClick()} >Login</Button>
                </div>


                <div className="col-md-2 log-out">
                        <Button bsStyle="primary" onClick={() => this.handleLoginClick()}>Logout</Button>
                </div>
            </div>
        );
    }





}

export default Header;
