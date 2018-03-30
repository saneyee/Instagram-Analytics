// import React, {Component} from 'react';
// import Plot from 'react-plotly.js';
// import './index.css';
// class TagSpread extends Component {
//
//     createTagList = () => {
//         const {userMedia} = this.props;
//         let userTagObject = {};
//         let userTagList = [];
//         userMedia.map((mediaElement) => {
//             mediaElement.tags.map((tag) => {
//                 if (userTagObject[tag] === undefined) {
//                     userTagObject[tag] = 1;
//                 } else {
//                     userTagObject[tag]++;
//                 }
//             });
//         });
//         for (var tag in userTagObject) {
//             userTagList.push({tagName: tag, count: userTagObject[tag]});
//         }
//         userTagList.sort((a, b) => {
//             return b.count - a.count
//         });
//         return userTagList
//     }
//
//     renderTagPage = () => {
//         const tagList = this.createTagList();
//         /*let renderTagPage = [];
//         for (var i = 0; i < 10; i++) {
//             renderTagPage.push(<li key={tagList[i].tagName}>
//                 #<span>{tagList[i].tagName}</span>-<span>{tagList[i].count}</span>
//             </li>);
//         }
//         return renderTagPage;*/
//         let tagNames = [];
//         let tagCounts = [];
//         for (var i = 0; i < 10; i++) {
//             tagNames.push(tagList[i].tagName);
//             tagCounts.push(tagList[i].count);
//         }
//         return {
//             tagNames : tagNames,
//             tagCounts : tagCounts
//         }
//     }
//
//     render() {
//         return (<div className="col-xs-10 col-xs-offset-1 bottom-padding-large">
//             <div className="panel panel-default">
//                 <div className="panel-heading">
//                     Your top 10 most used tags
//                 </div>
//                 <div className="panel-body">
//                     <Plot
//                         data={[
//                             {
//                                 type: 'bar',
//                                 x: this.renderTagPage().tagCounts,
//                                 y: this.renderTagPage().tagNames,
//                                 orientation: 'h'
//                             }
//                         ]}
//                         layout={{
//                             width: 900,
//                             height: 600,
//                             title: 'Top 10 tags used',
//                             showlegend: false
//                         }}
//                         config = {
//                             {staticPlot: true}
//                         }
//                     />
//                 </div>
//             </div>
//         </div>);
//     }
// }
//
// export default TagSpread;
