import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';


const News = (props) => {

    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(false)

    //document.title = `${this.capitalize(props.category)} - Khabari | Get your daily dose of news for free`;
    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    const updateNews = async () => {
        let url = `https://saurav.tech/NewsAPI/top-headlines/category/${props.category}/${props.country}.json`;
        setloading(true)
        let data = await fetch(url);
        let parsedData = await data.json();
        setloading(false)
        setarticles(parsedData.articles)

    }

    useEffect(() => {
        document.title = `${capitalize(props.category)} - Khabari | Get your daily dose of news for free`;
        updateNews();
        // eslint-disable-next-line
    }, [])

    return (
        <div className="container my-5">
            <h1 className="text-center">Top {capitalize(props.category) === "General" ? "" : capitalize(props.category)} Headlines</h1>
            {loading && <Spinner />}
            <div className="row">
                {articles.map((element) => {
                    return <div className="col-md-4 my-3" key={element.url}>
                        <NewsItem mode={props.mode} title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author ? element.author : "Khabari"} publishedAt={element.publishedAt.slice(0, 10)} source={element.source.name} />
                    </div>
                })}

            </div>
        </div>
    )

}


News.defaultProps = {
    country: 'in',
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
}

export default News;
