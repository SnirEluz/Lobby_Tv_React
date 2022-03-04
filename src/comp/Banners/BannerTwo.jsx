import React, { useEffect, useRef, useState } from 'react'
import './Banners.scss';
import Two001 from './BannerTwoImage/Two001.jpeg'
import Two002 from './BannerTwoImage/Two002.jpeg'
import Two003 from './BannerTwoImage/Two003.png'


export default function BannerTwo() {
    const [imageBanner, setImageBanner] = useState([
        {
            image: Two001,
        },
        {
            image: Two002,
        },
        {
            image: Two003,
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
        <div className="BannerTwo fade-in-out" ref={animationEl}>
            <img src={imageBanner[index].image} alt="" />
        </div>
    )
}
