import React, { useEffect, useState, useRef } from "react"

import EaseAnswerSelProps from './EaseAnswerSelProps';
import EaseAnswerItem from './EaseAnswerItem';

interface AnswerContainProps {
    curve?: any;
}

const EaseAnswerContain: React.FC<AnswerContainProps> = ({ curve }) => {

    return (
        <div style={{
            display: "flex",
            padding: "42px 8px 0px 8px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "8px"}}>
                
                <EaseAnswerItem props="Web" curve={EaseAnswerSelProps(curve).Web} />
                <EaseAnswerItem props="AOS" curve={EaseAnswerSelProps(curve).AOS} />
                <EaseAnswerItem props="UIKIT" curve={EaseAnswerSelProps(curve).UIKIT} />
                <EaseAnswerItem props="SWIFTUI" curve={EaseAnswerSelProps(curve).SWIFTUI} />
        </div>
    );
}
export default EaseAnswerContain;