import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {

    static defaultProps = {
        country: 'in',
        category: 'general',
    }

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
    }
    
    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }


    async componentDidMount(){
        let url = `https://saurav.tech/NewsAPI/top-headlines/category/${this.props.category}/${this.props.country}.json`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({loading:false});
        this.setState({articles: parsedData.articles})
    }

    render() {
        return (
            <div className="container my-5">
                <h1 className="text-center">Top Headlines</h1>
                {this.state.loading && <Spinner/>}
                <div className="row">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4 my-3" key={element.url}>
                    <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author?element.author:"Khabari"} publishedAt={element.publishedAt.slice(0,10)} source={element.source.name}/>
                </div>
                })}
                    
                </div>
            </div>
        )
    }
}

export default News
