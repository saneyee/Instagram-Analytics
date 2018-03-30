import React, {Component} from 'react';
import Header from './Header/Header.jsx';
// import MostLikedPost from './PageItems/MostLikedPost.jsx';
// import MostCommentedPost from './PageItems/MostCommentedPost.jsx';
// import TagSpread from './PageItems/TagSpread.jsx';
// import Landing from './PageItems/Landing.jsx';
class Home extends Component {
    render() {
        const {...props} = this.props;
        return (
            <Header {...props} />

        );
    }
}

export default Home;
