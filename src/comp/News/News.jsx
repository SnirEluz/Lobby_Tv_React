import React, { useEffect, useState } from 'react'
import './News.scss';

export default function News() {
    const [news, setNews] = useState([])
    const [articles, setArticles] = useState(0)

    let callApi = async () => {
        try {
            const res = await fetch(`https://newsapi.org/v2/top-headlines?country=il&apiKey=ee0332cdaf8f43218ff8cf1f7228f744`)
            const data = await res.json()
            await setNews(data)
            console.log("1")
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(async () => {
        await callApi();
        await setInterval(callApi, 1000 * 60 * 60);
        setInterval(() => setArticles(articles => articles + 1) , 5000);
    }, [])
    if (articles >= 19 - 1) {
        setArticles(0)
    }
    if (news.totalResults == undefined) {
        return (
            <div>
                Loading...
            </div>
        );
    }
    return (
        <div className="News" dir="rtl">
            <h1>חדשות |</h1>
            <h2>{news.articles[articles].publishedAt.slice(11, 16)}</h2>
            <h2>{news.articles[articles].title}</h2>
        </div>
    )
}


