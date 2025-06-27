import React, { useState, useEffect, useRef } from "react"

interface props {
    key?: number
    name?: string
    duration?: number
    width?: number
}

const TimeBoxStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "flex-start",
    flexShrink: 0,
    height: "28px",
    borderRadius: 100,
    border: "1px solid #60CC9E",
    opacity: 0.5,
    background: "#B3EECD",
}

const TimeBox: React.FC<props> = ({ key, name, duration, width }) => {
    return (
        <div
            key={key}
            style={{ ...TimeBoxStyle, width: width * duration + "px", visibility: name==="Delay" ? "hidden" : "visible" }}
        ></div>
    )
}

export default TimeBox
