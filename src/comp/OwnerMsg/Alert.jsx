import React from 'react'
import ItemAlert from './ItemAlert'
import './Alert.scss';


export default function Alert() {
    return (
        <div className="Alert" dir="rtl">
            <div className="Top">
                <h1>הודעות מאת ועד הבניין</h1>
            </div>
            <div className="Middle">
                <ItemAlert />
            </div>
            <div className="Bottom"></div>
        </div>
    )
}
