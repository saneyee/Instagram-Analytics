import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home/Home.jsx';
import Login from './Login/Login.jsx';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            analyticaModel:{
                userInfo : null,
                userMedia : null,
                appData: {
                    CLIENT_ID : "800819aa47f544fda95c4ec967d044db",
                    REDIRECT_URL :  "http://analytica-saneyee.s3-website-us-west-2.amazonaws.com/login",
                    ACCESS_TOKEN: null
                }
            }
        }
    }
    componentDidMount(){
        if(localStorage.access_token) {
            // let appData = this.state.analyticaModel.appData;
            // appData.ACCESS_TOKEN = localStorage.access_token;
            // this.setState({
            //     appData : appData
            // },this.getUserInfo());
            this.setAccessToken(localStorage.access_token);
        }
    }
    setAccessToken = (token) => {
        let analyticaModel = this.state.analyticaModel;
        analyticaModel.appData.ACCESS_TOKEN = token;
        if(token !== null){
            localStorage.setItem('access_token',token);
        } else {
            localStorage.removeItem('access_token');
            analyticaModel.userInfo = null;
            analyticaModel.userMedia = null;
            analyticaModel.appData.ACCESS_TOKEN = null;
        }

        this.setState({
            analyticaModel : analyticaModel
        },this.getUserInfo());
    }

    getUserInfo = () => {
        const userInfoURL = `https://api.instagram.com/v1/users/self/?access_token=${this.state.analyticaModel.appData.ACCESS_TOKEN}`
        const analyticaModel = this.state.analyticaModel;
        fetch(userInfoURL, {
            method: 'get'
        }).then((response) => {
            response.json().then((responseData) => {
                analyticaModel.userInfo = responseData.data;
                this.setState({
                    analyticaModel : analyticaModel
                });
            });
            this.getUserMedia();
        }).catch((err) => {
            console.log(err);
        });
    }
    getUserMedia = () => {
        const userMediaURL = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${this.state.analyticaModel.appData.ACCESS_TOKEN}`;
        const analyticaModel = this.state.analyticaModel;
        fetch(userMediaURL,{
            method: 'get'
        }).then((response) => {
            response.json().then((responseData) => {
                analyticaModel.userMedia = responseData.data;
                this.setState({
                    analyticaModel : analyticaModel
                });
            });

        }).catch((err) => {
            console.log(err);
        })
    }
    handleLogout = () => {
        this.setAccessToken(null);
    }
    render() {
        const appData = this.state.analyticaModel.appData;
        const loginURL = `https://api.instagram.com/oauth/authorize/?client_id=${appData.CLIENT_ID}&redirect_uri=${appData.REDIRECT_URL}&response_type=token`;
        return (
            <Router>
                <div>
                    <Route exact path="/"  render= {
                        () => (<Home loginURL={loginURL}
                            handleLogout = {this.handleLogout} accessToken= {this.state.analyticaModel.appData.ACCESS_TOKEN} userInfo= {this.state.analyticaModel.userInfo}
                        userMedia= {this.state.analyticaModel.userMedia}/>)
                    }/>
                    <Route exact path="/login" render= {
                        () => (<Login setAccessToken={this.setAccessToken} />)
                    } />
                </div>
            </Router>
        );
    }
}

export default App;
