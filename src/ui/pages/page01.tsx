import React, { MouseEvent, useState } from 'react';
import HapticsListParents from './page01_folder/HapticsListParents';

export default function page01() {
    return (
        <div style={{width: '100%', height: '100%', justifyContent: 'flex-start', alignItems: 'flex-start', margin: 32, display: 'inline-flex'}}>
            <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "22px"}}>
            <div className='main_title_contain'>
                <h1 className='title'>Haptics</h1>
                <p className='sub_title'>Haptics값 정의</p>
            </div>
                <HapticsListParents/>
            </div>
         </div>
    );
}