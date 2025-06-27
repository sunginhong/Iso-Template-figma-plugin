import React, { useEffect, useState, useRef } from "react"
import AnimSelect from "./Animation/AnimSelect"

interface HapticsCanvasProps {
    title?: React.ReactNode;
    selector?: boolean;
    color?: any;
}

const HapticsCanvas: React.FC<HapticsCanvasProps> = ({ title, selector, color }) => {
    
    const [hover, setHover] = useState(false)
   
    useEffect(() => {
        
    }, [])

    return (
        <div
            style={{
                width: "400px",
                height: "207.792px",
                cursor: selector ? "pointer" : "default",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                backgroundColor: "white",
                borderRadius: "8px",
                gap: "10px",
                filter: selector
                    ? hover
                        ? "brightness(0.9)"
                        : "brightness(1)"
                    : "brightness(1)",
                transition: selector
                    ? "all 300ms cubic-bezier(0.15, 0, 0.15, 1)"
                    : "all 000ms linear",
            }}
            onMouseOver={() => {
                setHover(true)
            }}
            onMouseOut={() => setHover(false)}
        >
            <div
                style={{
                    width: "100%",
                    height: "100%",
                }}
            >
               <AnimSelect haptics={title}/>
               <div 
                    style={{
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        margin: "0px 16px 16px 0px",
                        display: "flex",
                        width: "56px",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <div style={{width: "16px", height: "16px", flexShrink: "0"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <path d="M12.3333 7.7147C12.7777 7.9713 12.7777 8.6128 12.3333 8.8694L4.33329 13.4882C3.88885 13.7448 3.33329 13.4241 3.33329 12.9109L3.33329 3.67325C3.33329 3.16005 3.88885 2.8393 4.33329 3.0959L12.3333 7.7147Z" fill="#8C8C8C"/>
                            </svg>
                        </div>
                        <div style={{color: "#8C8C8C", fontFamily: "Pretendard Variable", fontSize: "14px", fontStyle: "normal", fontWeight: "600", lineHeight: "150%"}}>PLAY</div>
                </div>
            </div>
        </div>
    )
};

export default HapticsCanvas;