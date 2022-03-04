import React, { useEffect, useState } from 'react'
import Clock from 'react-live-clock';
import Shabbat from '../Shabbat/Shabbat';
import './Header.scss';


export default function Header() {
    let date = new Date()
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    let Month = date.getMonth()
    let Day = date.getDay()
    let Datee = date.getDate()
    let Year = date.getYear()

    useEffect(() => {
        if (Month === 0) {
            setMonth("ינואר")
        } else if (Month === 1) {
            setMonth("פברואר")
        } else if (Month === 2) {
            setMonth("מרץ")
        } else if (Month === 3) {
            setMonth("אפריל")
        } else if (Month === 4) {
            setMonth("מאי")
        } else if (Month === 5) {
            setMonth("יוני")
        } else if (Month === 6) {
            setMonth("יולי")
        } else if (Month === 7) {
            setMonth("אוגוסט")
        } else if (Month === 8) {
            setMonth("ספטמבר")
        } else if (Month === 9) {
            setMonth("אוקטובר")
        } else if (Month === 10) {
            setMonth("נובמבר")
        } else if (Month === 11) {
            setMonth("דצמבר")
        }
    }, []);
    useEffect(() => {
        if (Day === 0) {
            setDay("ראשון")
        } else if (Day === 1) {
            setDay("שני")
        } else if (Day === 2) {
            setDay("שלישי")
        } else if (Day === 3) {
            setDay("רבעי")
        } else if (Day === 4) {
            setDay("חמישי")
        } else if (Day === 5) {
            setDay("שישי")
        } else if (Day === 6) {
            setDay("שבת")
        }
    }, []);

    return (
        <div className="Header" dir="rtl">
            <div className="Time">
                <Clock
                    className="Clock"
                    ticking={true} timezone={'Asia/Jerusalem'} />
                <div>
                    <h1>יום {day}</h1>
                    <h1>{Datee + ", " + month}</h1>
                </div>
            </div>
            <div className="Name">
                <h1>ברוכים הבאים<h2>לאקסודוס 32</h2></h1>
            </div>
            <div className="ShabbatTime">
                <Shabbat />
            </div>
        </div>
    )
}
