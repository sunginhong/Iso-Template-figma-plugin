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
    const [linear, setLinear] = useState<Array<string>>([])

    useEffect(() => {
        setEaseStand(EasingListSelProps("ease_Standard")[1])
        setEaseOut(EasingListSelProps("ease_Out")[1])
        setEaseInOut(EasingListSelProps("ease_InOut")[1])
        setEaseSpring(EasingListSelProps("ease_Spring")[1])
        setLinear(EasingListSelProps("linear")[1])
    }, [])

    
    const rowItemStyle: React.CSSProperties = {
        position: "absolute",
        width: "316px",
        height: "64px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "14px",
    }

    return (
        <>
            <div
                className="row_item"
                style={{
                    width: "316px",
                    height: "64px",
                }}
            >
                <div
                    className="row_item_loading"
                    style={{
                        ...rowItemStyle,

                        opacity: loadingComplete ? 0 : 1,
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
                >
                    <div
                        className="hold_image"
                        style={{
                            width: "45px",
                            height: "45px",
                            borderRadius: "100%",
                            backgroundColor: "#E9E9E9",
                            animationName: !loadingComplete
                                ? loaingIs
                                    ? "fadeAnimation"
                                    : undefined
                                : undefined,
                            animationDuration: "0.5s",
                            animationTimingFunction:
                                "cubic-bezier(" +
                              linear[0] +
                              ", " +
                              linear[1] +
                              ", " +
                              linear[2] +
                              ", " +
                              linear[3] +
                              ")",
                            animationIterationCount: loadingComplete
                                ? "0"
                                : "infinite",
                            animationFillMode: "forwards",
                            animationDirection: " alternate",
                            opacity: 0.3,
                        }}
                    ></div>
                    <div
                        className="hold_message"
                        style={{
                            width: "226px",
                            height: "18px",
                            borderRadius: "100px",
                            backgroundColor: "#E9E9E9",
                            animationName: !loadingComplete
                                ? loaingIs
                                    ? "fadeAnimation"
                                    : undefined
                                : undefined,
                            animationDuration: "0.5s",
                            animationDelay: "0.2s",
                            animationTimingFunction:
                                "cubic-bezier(" +
                              linear[0] +
                              ", " +
                              linear[1] +
                              ", " +
                              linear[2] +
                              ", " +
                              linear[3] +
                              ")",
                            animationIterationCount: loadingComplete
                                ? "0"
                                : "infinite",
                            animationFillMode: "forwards",
                            animationDirection: " alternate",
                            opacity: 0.3,
                        }}
                    ></div>
                </div>
                <div
                    className="row_item_content"
                    style={{
                        ...rowItemStyle,
                        opacity: loadingComplete ? 1 : 0,
                        transition: loadingComplete
                            ? "opacity 300ms cubic-bezier(" +
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
                >
                    <div
                        style={{
                            width: "45px",
                            height: "45px",
                            borderRadius: "100%",
                            backgroundColor: "#B3EECD",
                        }}
                    ></div>
                    <div
                        style={{
                            width: "226px",
                            height: "18px",
                            borderRadius: "100px",
                            backgroundColor: "#B3EECD",
                        }}
                    ></div>
                </div>
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
