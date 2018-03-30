import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
// import './index.css';

class Header extends Component {


    render() {
        return(
            <div className="header">
                <div className="col-md-2 logo">
                    Analytica
                </div>

                <div className="col-md-2 col-md-offset-8 login">
                    <Button bsStyle="primary" >Login</Button>
                </div>
            </div>
        );
    }





}

export default Header;
