
import React, { useEffect, useState } from 'react'
import './Shabbat.scss';

export default function Shabbat() {
    console.log("yes")

    const [shabbat, setShabbat] = useState(10)
    console.log(shabbat)
    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`https://www.hebcal.com/shabbat?city=ashdod&cfg=json&M=on`)
                const data = await res.json()
                setShabbat(data)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])
    if (shabbat.date == undefined) {
        return (
            <div>
                Loading...
            </div>
        );
    }
    return (
        <div className="Shabbat">
            <h1>פרשת שבת: {shabbat.items[2].hebrew}</h1>
            <h1>כניסת שבת: {shabbat.items[1].date.slice(11,16)}</h1>
            <h1>יציאת שבת שבת: {shabbat.items[3].date.slice(11,16)}</h1>
        </div>
    )
}
