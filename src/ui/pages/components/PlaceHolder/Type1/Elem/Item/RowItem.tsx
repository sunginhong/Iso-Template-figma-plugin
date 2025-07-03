import React, { useState, useEffect, useRef } from "react"
import EasingListSelProps from "../../../../../page00_folder/EasingListSelProps"

interface props {
    key?: number
    loaingIs?: boolean
    loadingComplete?: boolean
}

const RowItem: React.FC<props> = ({ key, loaingIs, loadingComplete }) => {
    const [easeStand, setEaseStand] = useState<Array<string>>([])
    const [easeOut, setEaseOut] = useState<Array<string>>([])
    const [easeInOut, setEaseInOut] = useState<Array<string>>([])
    const [easeSpring, setEaseSpring] = useState<Array<string>>([])

    useEffect(() => {
        setEaseStand(EasingListSelProps("ease_Standard")[1])
        setEaseOut(EasingListSelProps("ease_Out")[1])
        setEaseInOut(EasingListSelProps("ease_InOut")[1])
        setEaseSpring(EasingListSelProps("ease_Spring")[1])
    }, [])

    const rowItemStyle: React.CSSProperties = {
        position: "absolute",
        width: "286px",
        height: "18px",
        borderRadius: "100px",
    }

    return (
        <>
            <div
                className="row_item"
                style={{
                    width: "286px",
                    height: "18px",
                }}
            >
                <div
                    className="row_item_placeholder"
                    style={{
                        ...rowItemStyle,
                        backgroundColor: "#E7E7E7",
                        animationName: !loadingComplete
                            ? loaingIs
                                ? "fadeAnimation"
                                : undefined
                            : undefined,
                        animationDuration: "0.5s",
                        animationTimingFunction:
                            "cubic-bezier(0.33, 1, 0.68, 1)",
                        animationIterationCount: loadingComplete
                            ? "0"
                            : "infinite",
                        animationFillMode: "forwards",
                        animationDirection: " alternate",
                        opacity: loaingIs ? (loadingComplete ? 0 : 0.3) : 0.3,
                        transition: loadingComplete
                            ? "opacity 0.2s cubic-bezier(" +
                              easeOut[0] +
                              ", " +
                              easeOut[1] +
                              ", " +
                              easeOut[2] +
                              ", " +
                              easeOut[3] +
                              ")"
                            : "none",
                    }}
                ></div>
                <div
                    className="row_item_content"
                    style={{
                        ...rowItemStyle,
                        backgroundColor: "#B3EECD",
                        opacity: loadingComplete ? 1 : 0,
                        transition: loadingComplete
                            ? "opacity 100ms cubic-bezier(" +
                              easeOut[0] +
                              ", " +
                              easeOut[1] +
                              ", " +
                              easeOut[2] +
                              ", " +
                              easeOut[3] +
                              ") 100ms"
                            : "none",
                    }}
                ></div>
            </div>
            <style>
                {`
                @keyframes fadeAnimation {
                    0% {
                    opacity: 0.3;
                    }
                    100% {
                    opacity: 1;
                    }
                }
                `}
            </style>
        </>
    )
}

export default RowItem
