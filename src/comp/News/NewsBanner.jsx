import React, { useEffect, useState } from 'react'
import Ban from './Ban.png'

export default function NewsBanner() {
    const [index, setIndex] = useState(0)
    const [news, setNews] = useState([])
    const [newsSorter, setNewsSorter] = useState([])
    let callApi = async () => {
        try {
            const res = await fetch(`https://newsapi.org/v2/top-headlines?country=il&apiKey=ee0332cdaf8f43218ff8cf1f7228f744`)
            const data = await res.json()
            let NewArray = data.articles.splice(index, 3);
            setNews(data)
            setNewsSorter(NewArray)
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(async () => {
        await callApi();
        await setInterval(callApi, 1000 * 60 * 60);
        // setInterval(async () => {
        //     await setIndex(articles => articles + 3)
        //     let NewArray2 = news.articles.splice(index, 3);
        //     setNewsSorter(NewArray2)
        // }, 5000);
    }, [])
    // if (index >= 19 - 1) {
    //     setIndex(0)
    // }
    if (newsSorter == undefined) {
        return (
            <div>
                Loading...
            </div>
        );
    }
    return (
        <div className="NewsBanner">
            {newsSorter.map((item, index) =>
                <div className="NewsBannerDiv" key={index}>
                    {!item.urlToImage ? <img src={Ban} alt="" /> : <img src={item.urlToImage} alt="" />}

                    <div>
                        <h1>{item.title}</h1>
                        <h3>{item.source.name}</h3>
                    </div>
                </div>
            )}
        </div>
    )
}
