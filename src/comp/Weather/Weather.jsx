import React, { useEffect, useState } from 'react'
import './Weather.scss';


export default function Weather() {
    const [weather, setWeather] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=ashdod&lang=he&units=metric&appid=a36825a422170c3cc8e4aa040bcaeb8c`)
                const data = await res.json()
                setWeather(data)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])
    if (weather.main == undefined) {
        return (
            <div>
                Loading...
            </div>
        );
    } else {
        console.log(weather)
    }

    let calculateWind = weather.wind.speed * 3.6
    return (
        <div className="Weather" dir="rtl">
            <div className="Middle">
                <div className="One">
                    <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="" />
                    <h4>{weather.main.temp.toFixed(0)}°C</h4>
                </div>
                <div className="Two">
                    <h2>רוח: {calculateWind.toFixed(0)} קמ"ש</h2>
                    <h2>לחות: {weather.main.humidity.toFixed(0)}%</h2>
                    <h2>מעלות: {weather.main.temp_max.toFixed(0)}° / {weather.main.temp_min.toFixed(0)}°</h2>
                </div>
                <div className="Three">
                    <h1>יום ראשון</h1>
                    <h2>{weather.weather[0].description}</h2>
                </div>
            </div>
        </div>
    )
}
