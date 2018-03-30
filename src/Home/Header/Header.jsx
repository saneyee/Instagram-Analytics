import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import './index.css';

class Header extends Component {
    handleLoginClick = () => {
        window.location = this.props.loginURL;
    }


    render() {
        const userInfo = this.props.userInfo;
        return(
            <div className="header">
                <div className="col-md-2 logo">
                    Analytica
                </div>

                <div className="col-md-8 user-info">
                        <img className="profile-pic" src={userInfo.profile_picture} width="50" height="50" alt="userMedia"/>
                        <span> {userInfo.full_name} | Follwers : {userInfo.counts.followed_by} | Following: {userInfo.counts.follows} | Media {userInfo.counts.media}</span>
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
