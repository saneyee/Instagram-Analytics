import React, {Component} from 'react';
import Plot from 'react-plotly.js';
import './index.css';
class FilterSpread extends Component {

    createFilterList = () => {
        const {userMedia} = this.props;
        let userFilterObject = {};
        let userFilterList = [];
        userMedia.map((mediaElement) => {
            if (userFilterObject[mediaElement.filter] === undefined) {
                userFilterObject[mediaElement.filter] = 1;
            } else {
                userFilterObject[mediaElement.filter]++;
            }
        });
        for (var filter in userFilterObject) {
            userFilterList.push({filterName: filter, count: userFilterObject[filter]});
        }
        userFilterList.sort((a, b) => {
            return b.count - a.count
        });
        return userFilterList
    }
    renderFilterPage = () => {
        const filterList = this.createFilterList();
        console.log(filterList);

        let filterNames = [];
        let filterCounts = [];

        for (var i = 0; i < filterList.length; i++) {
            filterNames.push(filterList[i].filterName);
            filterCounts.push(filterList[i].count);
        }
        return {
            filterNames : filterNames,
            filterCounts : filterCounts
        }
    }

    render() {
        console.log(this.renderFilterPage());
        return (
            <div className="col-xs-10 col-xs-offset-1 bottom-padding-large background-white">
            <h3>Your filter usage </h3>
            <hr/>
            <div className="center-element">
                <Plot
                    data={[
                        {
                            type: 'pie',
                            values: this.renderFilterPage().filterCounts,
                            labels: this.renderFilterPage().filterNames
                        }
                    ]}
                    layout={{
                        width: 600,
                        height: 600,
                        showlegend: true
                    }}
                    config = {
                        {staticPlot: true}
                    }
                />
                </div>
            </div>
        );
    }
}

export default FilterSpread;
