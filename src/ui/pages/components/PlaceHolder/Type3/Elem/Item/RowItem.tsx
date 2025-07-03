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
        setEaseSpring(EasingListSelProps("ease_Spring")[1])
        setLinear(EasingListSelProps("linear")[1])
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
                        overflow: "hidden",
                        background:
                            "linear-gradient(122deg, #F136BE 0%, #E151E3 34.37%, #A864FF 66.67%, #3EBFF6 100%)",
                        opacity: 0.14,
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
                        style={{
                            position: "absolute",
                            animationName: !loadingComplete
                                ? loaingIs
                                    ? "brightnessAnimation"
                                    : undefined
                                : undefined,
                            animationDuration: "2s",
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
                            animationDirection: "normal",
                        }}
                    >
                        <div
                            className="row_item_brightness"
                            style={{
                                ...rowItemStyle,
                                width: "31.848px",
                                height: "149.978px",
                                // opacity: "0.9",
                                backgroundColor: "#fff",
                                filter: "blur(15px)",
                                top: "50%",
                                left: "50%",
                                transform:
                                    "rotate(19.95deg) translate(-50%, -50%)",
                                opacity: !loadingComplete
                                    ? loaingIs
                                        ? 0.9
                                        : 0
                                    : 0,
                                transition:
                                    "opacity 200ms cubic-bezier(" +
                                    easeOut[0] +
                                    ", " +
                                    easeOut[1] +
                                    ", " +
                                    easeOut[2] +
                                    ", " +
                                    easeOut[3] +
                                    ")",
                            }}
                        ></div>
                    </div>
                </div>
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
                @keyframes brightnessAnimation {
                    0% {
                    transform: translateX(calc(0% - 62px));
                    }
                    100% {
                    transform: translateX(calc(286px + 62px));
                    }
                }
                `}
            </style>
        </>
    )
}

export default RowItem
