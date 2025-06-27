import React, { useEffect, useState, useRef } from "react"

import HapticsAnswer from './HapticsAnswer';
import HapticsAnswerItemPropsTitle from './HapticsAnswerItemPropsTitle';

interface HapticsAnswerItemnProps {
    props?: string;
    haptics?: any;
}

const HapticsAnswerItem: React.FC<HapticsAnswerItemnProps> = ({ props, haptics }) => {

    useEffect(() => {
    }, [props]) 

    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", gap: "16px"}}>
            <div style={{display: "flex", alignItems: "center", gap: "16px"}}>
                <p style={{color:"#6A7078", fontFamily: "Pretendard Variable", fontSize: "14px", fontStyle: "normal", fontWeight: "600", lineHeight: "180%", margin: 0}}>{HapticsAnswerItemPropsTitle(props)}</p>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", gap: "16px"}}>
                    {props === "AOS" && (
                        Array.isArray(haptics) && haptics.map((item: any, idx: number) => (
                            item && 
                            <div key={idx} style={{display: "flex", flexDirection: "column", justifyContent: "left", alignItems: "flex-start", gap: "16px"}}>
                            <HapticsAnswer haptics={item} />
                            </div>
                        ))
                        )} 
                    {props === "IOS" && (
                        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", gap: "16px", width: "364px"}}>
                            <HapticsAnswer haptics={haptics} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
export default HapticsAnswerItem;