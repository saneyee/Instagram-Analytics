import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Home/Header/Header.jsx';
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
                    REDIRECT_URL : "http://localhost:3000/login",
                    ACCESS_TOKEN: null
                }
            }
        }
    }

    componentDidMount(){
        if(localStorage.access_token) {
            let appData = this.state.analyticaModel.appData;
            appData.ACCESS_TOKEN = localStorage.access_token;
            this.setState({
                appData : appData
            });
        }
    }

    setAccessToken = (token) => {
        let appData = this.state.analyticaModel.appData;
        appData.ACCESS_TOKEN = token;
        localStorage.setItem('access_token',token);
        this.setState({
            appData : appData
        });
    }

  render() {
      const appData = this.state.analyticaModel.appData;
        const loginURL = `https://api.instagram.com/oauth/authorize/?client_id=${appData.CLIENT_ID}&redirect_uri=${appData.REDIRECT_URL}&response_type=token`;
    return (
        <Router>
                  <div>
                      <Route exact path="/"  render= {
                          () => (<Header loginURL={loginURL} accessToken= {this.state.analyticaModel.appData.ACCESS_TOKEN} userInfo= {this.state.analyticaModel.userInfo}
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
