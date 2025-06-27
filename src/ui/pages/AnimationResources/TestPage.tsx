import React, { MouseEvent, useState } from 'react';

export default function TestPage() {
    return (
        <div style={{width: '100%', height: '100%', justifyContent: 'flex-start', alignItems: 'flex-start', margin: 32, display: 'inline-flex'}}>
            <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "22px"}}>
            <div className='main_title_contain'>
                <h1 className='title'>TestPage</h1>
            </div>
            </div>
         </div>
    );
}