import React, { MouseEvent, useState } from 'react';
import EasingListParents from './page00_folder/EasingListParents';
import './page00_folder/style/EaseStyle.css';

export default function page00() {
    return (
        <div style={{width: '100%', height: '100%', justifyContent: 'flex-start', alignItems: 'flex-start', margin: 32, display: 'inline-flex'}}>
            <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "22px"}}>
            <div className='main_title_contain'>
                <h1 className='title'>Easing</h1>
                <p className='sub_title'>이지 커브값 정의</p>
            </div>
                <EasingListParents/>
            </div>
         </div>
    );
}