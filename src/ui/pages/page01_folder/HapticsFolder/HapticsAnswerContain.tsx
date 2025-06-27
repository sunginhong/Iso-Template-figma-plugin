import React, { useEffect, useState, useRef } from "react"

import HapticsAnswerSelProps from './HapticsAnswerSelProps';
import HapticsAnswerItem from './HapticsAnswerItem';

interface AnswerContainProps {
    haptics?: any;
}

const HapticsAnswerContain: React.FC<AnswerContainProps> = ({ haptics }) => {

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "16px"}}>
            
            <HapticsAnswerItem props="AOS" haptics={HapticsAnswerSelProps(haptics).AOS} />
            <HapticsAnswerItem props="IOS" haptics={HapticsAnswerSelProps(haptics).IOS} />
        </div>
    );
}
export default HapticsAnswerContain;