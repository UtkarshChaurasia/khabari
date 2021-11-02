import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
    
    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }


    async componentDidMount(){
        let url = "https://saurav.tech/NewsAPI/top-headlines/category/general/in.json";
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
                    return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>
                })}
                    
                </div>
            </div>
        )
    }
}

export default News
