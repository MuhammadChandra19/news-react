import React, { Component } from 'react';
import Loading from '../Loading';
class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsList: []
        }
    }
    render() {
        const News = this.props.newsData.map((data, index) =>
            <div key={index} className="news-container">
                <img src={data.urlToImage} style={{ width: '100%' }} alt="img" />
                <div className="news-list-head">
                    <p>{data.source.name}</p>
                    <p>{data.publishedAt}</p>
                </div>
                <div className="news-list">

                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                    <a href={data.url} target="_blank">Read more ..</a>
                </div>
            </div>
        )
        return (
            <div>
                {News}
                <Loading showloading={this.props.loading} />
                <button id="buttonLoad" onClick={() => this.props.loadMore(this.props.thisCategory)} style={{ display: this.props.buttonLoad }} className="load-more">load more</button>
            </div>

        )
    }
}
export default News;
