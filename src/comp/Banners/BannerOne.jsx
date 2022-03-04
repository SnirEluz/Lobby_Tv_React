import React, { useEffect, useRef, useState } from 'react'
import './Banners.scss';
import CleaningImg001 from './BannerOneImage/CleaningImg001.jpg'
import CleaningImg002 from './BannerOneImage/CleaningImg002.jpg'


export default function BannerOne() {
    const [imageBanner, setImageBanner] = useState([
        {
            image: CleaningImg001,
            text: "דיירים נכבים אנה ממכם \n שמרו על נקיון הבניין"
        },
        {
            image: CleaningImg002,
            text: `נקיון הלובי חשוב לנו כמו שחשוב לכם`
        },
    ])
    const [index, setIndex] = useState(0)
    const animationEl = useRef(null);

    useEffect(() => {
        animationEl.current.addEventListener('animationiteration', () => {
            setIndex(currentIndex => {
                if (currentIndex + 1 < imageBanner.length ) {
                    return currentIndex + 1;
                } else {
                    return 0;
                }
            });
        });
    }, []);

    return (
        <div className="BannerOne fade-in-out" ref={animationEl}>
            <img src={imageBanner[index].image} alt="" />
            <h1>{imageBanner[index].text}</h1>
        </div>
    )
}
