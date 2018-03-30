import {Component} from 'react';
import {withRouter} from 'react-router-dom';

class Login extends Component {
    componentDidMount() {
        this.props.setAccessToken(window.location.hash.split('=')[1]);
        this.props.history.push('/');
    }
    render() {
        return (
            "You have successfully logged in. please wait while we redirect"
        );
    }
}

export default withRouter(Login);
