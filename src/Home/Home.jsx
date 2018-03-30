import React, {Component} from 'react';
import Header from './Header/Header.jsx';
import MostLikedPost from './PageItems/MostLikedPost.jsx';
import MostCommentedPost from './PageItems/MostCommentedPost.jsx';
import TagSpread from './PageItems/TagSpread.jsx';
import FilterSpread from './PageItems/FilterSpread.jsx';
import Landing from './PageItems/Landing.jsx';
class Home extends Component {
    render() {
        const {...props} = this.props;
        return (
            <div className="page-wrapper">
                <Header {...props} />
                {
                    this.props.userMedia &&
                    <div className="page-elements">
                        <MostLikedPost userMedia= {this.props.userMedia} />
                        <MostCommentedPost userMedia= {this.props.userMedia} />
                        <TagSpread userMedia= {this.props.userMedia} />
                        <FilterSpread userMedia = {this.props.userMedia} />
                    </div>
                }
                {
                    !this.props.userMedia && !window.localStorage.access_token &&
                    <Landing />
                }
            </div>
        );
    }
}

export default Home;
