import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Al Jazeera",
            "title": "Virat Kohli blasts ‘spineless, pathetic’ trolls after Shami abuse",
            "description": "India’s cricket captain spoke out in defence of the only Muslim player in the squad after abuse following Pakistan loss.",
            "url": "http://www.aljazeera.com/sports/2021/10/31/india-kohli-spineless-critics-after-shami-abuse",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2021/10/2017-05-30T154706Z_139160826_MT1ACI14800230_RTRMADP_3_CRICKET-CHAMPIONSTROPHYPREVIEW.jpg?resize=1200%2C630",
            "publishedAt": "2021-10-31T06:54:00Z",
            "content": "Indias cricket captain Virat Kohli has thrown his full support behind Mohammed Shami, the only Muslim player in the squad, after the fast bowler was abused on social media following the sides T20 Wor… [+3282 chars]"
        },
        {
            "source": {
                "id": "abc-news-au",
                "name": "ABC News (AU)"
            },
            "author": "ABC News",
            "title": "Australian Test cricketer Peter Philpott dies, aged 86",
            "description": "Australian Test leg spinner and highly accomplished coach Peter Philpott has died after complications from a fall, aged 86.",
            "url": "http://www.abc.net.au/news/2021-10-31/australian-test-cricketer-peter-philpott-has-died-aged-86/100583944",
            "urlToImage": "https://live-production.wcms.abc-cdn.net.au/fb816d6084e89488948c95c253c82057?impolicy=wcms_crop_resize&cropH=1903&cropW=3383&xPos=0&yPos=1217&width=862&height=485",
            "publishedAt": "2021-10-31T05:36:10Z",
            "content": "Former Australian Test cricketer Peter Philpott has died at the age of 86, due to complications from a fall.\r\nThe leg-spinner played eight Tests in the mid 1960s, taking 26 wickets at an average of 3… [+823 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ]

    constructor(){
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }


    render() {
        return (
            <div className="container my-3">
                <h2>Top Headlines</h2>
                
                <div className="row">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0, 88)} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>
                })}
                    
                </div>
            </div>
        )
    }
}

export default News
