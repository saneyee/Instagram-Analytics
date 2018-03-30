import React, {Component} from 'react';
import {Glyphicon} from 'react-bootstrap';
// import './index.css';

class MostLikedPost extends Component {
    renderMostLikedPage = () => {
        const { userMedia } = this.props;
        let userMediaList = [];
        if(userMedia !== null){
            userMedia.sort((a,b) => {
                return  b.likes.count - a.likes.count;
            });
            for(let i=0; i < 3; i++){
                userMediaList.push(<li key={i}>
                    <div>
                        <img src={userMedia[i].images.standard_resolution.url} height="300" alt="MostLikedPost"/>
                    </div>
                    <div>
                        <span className="like-icon"><Glyphicon glyph="heart" /> </span> {userMedia[i].likes.count}
                    </div>
                </li>);
            }
        }

        return userMediaList
    }
    render() {
        return (
            <div className="col-xs-10 col-xs-offset-1 bottom-padding-large">
                <h3>You top 3 most liked posts</h3>
                <ul className="media-list">
                    {this.renderMostLikedPage()}
                </ul>
            </div>
        );
    }
}

export default MostLikedPost;
