 import React, {Component} from 'react';
// import './index.css';
class Landing extends Component {

    render() {
        return (
            <div>
                <div className="landing col-xs-12">
                    <span className="landing-text">Analytica</span>
                </div>
                <div className="landing-bottom-text">
                    <p>
                        You are not logged in, please login to continue.
                    </p>
                </div>
            </div>
        );
    }
}

export default Landing;
