import React, { useEffect, useState, useRef } from "react"

import EaseAnswer from './EaseAnswer';
import EaseAnswerItemPropsTitle from './EaseAnswerItemPropsTitle';

interface EaseAnswerItemnProps {
    props?: string;
    curve?: string;
}

const EaseAnswerItem: React.FC<EaseAnswerItemnProps> = ({ props, curve }) => {

    useEffect(() => {
    }, [props]) 

    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", gap: "16px"}}>
            <div style={{display: "flex", alignItems: "center", gap: "16px"}}>
                <p style={{color:"#6A7078", fontFamily: "Pretendard Variable", fontSize: "14px", fontStyle: "normal", fontWeight: "600", lineHeight: "180%", margin: 0}}>{EaseAnswerItemPropsTitle(props)}</p>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", gap: "16px"}}><EaseAnswer propsTitle={curve}/> </div>
            </div>
        </div>
    );
}
export default EaseAnswerItem;