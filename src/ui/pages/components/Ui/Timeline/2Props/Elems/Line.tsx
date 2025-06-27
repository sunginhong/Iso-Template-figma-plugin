import React, { useState, useEffect, useRef } from "react"

interface props {
    index?: number
    idx?: number
    rowHeight?: number
    TimeBoxWidth?: number
    lastItem?: boolean
}

const labelStyle: React.CSSProperties = {
    color: "#A3A3A3",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "10px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "16px",
}

const Line: React.FC<props> = ({
    index,
    idx,
    rowHeight,
    TimeBoxWidth,
    lastItem,
}) => {
    return (
        <div
            key={index}
            className={"line" + idx + " " + index}
            style={{
                position: "absolute",
                top: "-50%",
                width: "1px",
                height: rowHeight + "px",
                left: index * TimeBoxWidth + "px",
                backgroundColor: "#C9C9C9",
            }}
        >
            {lastItem ? (
                <p
                    style={{
                        ...labelStyle,
                        position: "absolute",
                        bottom: "0",
                        left: "50%",
                        transform: "translate(-50%, 20px)",
                    }}
                >
                    {index !== undefined && TimeBoxWidth !== undefined
                        ? ((index) * 0.1).toFixed(1)
                        : ""}
                    s
                </p>
            ) : null}
        </div>
    )
}

export default Line
