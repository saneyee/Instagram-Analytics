import React, {Component} from 'react';
import Plot from 'react-plotly.js';
// import './index.css';

class TagSpread extends Component {

    createTagList = () => {
        const {userMedia} = this.props;
        let userTagObject = {};
        let userTagList = [];
        userMedia.map((mediaElement) => {
            mediaElement.tags.map((tag) => {
                if (userTagObject[tag] === undefined) {
                    userTagObject[tag] = 1;
                } else {
                    userTagObject[tag]++;
                }
            });
        });
        for (var tag in userTagObject) {
            userTagList.push({tagName: tag, count: userTagObject[tag]});
        }
        userTagList.sort((a, b) => {
            return b.count - a.count
        });
        return userTagList
    }

    renderTagPage = () => {
        const tagList = this.createTagList();
        let tagNames = [];
        let tagCounts = [];
        for (var i = 0; i < 10; i++) {
            tagNames.push(tagList[i].tagName);
            tagCounts.push(tagList[i].count);
        }
        return {
            tagNames : tagNames,
            tagCounts : tagCounts
        }
    }

    render() {
        return (
        <div className="col-xs-10 col-xs-offset-1 bottom-padding-large">
            <h3>Your top 10 most used tags</h3>
            <Plot
                data={[
                    {
                        type: 'bar',
                        x: this.renderTagPage().tagNames,
                        y: this.renderTagPage().tagCounts,
                        orientation: 'v'
                    }
                ]}
                layout={{
                    width: 800,
                    height: 600,
                    title: 'Top 10 tags used',
                    showlegend: false
                }}
                config = {
                    {staticPlot: true}
                }
            />
        </div>);
    }
}

export default TagSpread;
