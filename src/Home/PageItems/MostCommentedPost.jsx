// import React, {Component} from 'react';
// import {Glyphicon} from 'react-bootstrap';
// import './index.css';
// class MostCommentedPost extends Component {
//     renderMostLikedPage = () => {
//         const { userMedia } = this.props;
//         let userMediaList = [];
//         if(userMedia !== null){
//             userMedia.sort((a,b) => {
//                 return  b.comments.count - a.comments.count;
//             });
//             for(let i=0; i < 3; i++){
//                 userMediaList.push(<li key={i}>
//                     <div>
//                         <img src={userMedia[i].images.standard_resolution.url} height="300" alt="userMedia"/>
//                     </div>
//                     <div>
//                         <Glyphicon glyph="comment" /> {userMedia[i].comments.count}
//                     </div>
//                 </li>);
//             }
//         }
//
//         return userMediaList
//     }
//     render() {
//         return (
//             <div className="col-xs-10 col-xs-offset-1 bottom-padding-large">
//                 <h3>You top 3 most commented posts</h3>
//                 <ul className="media-list">
//                     {this.renderMostLikedPage()}
//                 </ul>
//
//             </div>
//         );
//     }
// }
//
// export default MostCommentedPost;
