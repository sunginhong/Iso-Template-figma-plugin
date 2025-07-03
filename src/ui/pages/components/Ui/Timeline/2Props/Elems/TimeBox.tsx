import React, { useState, useEffect, useRef } from "react"

interface props {
    key?: number
    name?: string
    ease?: any
    duration?: number
    width?: number
}

const arr = []

const EaseProps = [
    { title: "Ease-Standard", color: "#B3EECD", borderColor: "#60CC9E" },
    { title: "EaseOut", color: "#EDC1FF", borderColor: "#C56FE7" },
    { title: "EaseOut - Level 1", color: "#EDC1FF", borderColor: "#C56FE7" },
    { title: "EaseIn", color: "#FFD4AC", borderColor: "#F59C4A" },
    { title: "EaseInOut", color: "#FFBABF", borderColor: "#E65762" },
    { title: "Spring", color: "#B4D7FF", borderColor: "#60A2ED" },
    { title: "Spring - Level 1", color: "#B4D7FF", borderColor: "#60A2ED" },
    { title: "Spring - Level 2", color: "#B4D7FF", borderColor: "#60A2ED" },
    { title: "Linear", color: "#B9C4DC", borderColor: "#7482AA" },
]
const getColor = (title?: string) => {
    const match = EaseProps.find((e) => e.title === title)
    return match ? match.color : "#424242"
}

const getBorderColor = (title?: string) => {
    const match = EaseProps.find((e) => e.title === title)
    return match ? match.borderColor : "#424242"
}

const TimeBoxStyle = (title?: string): React.CSSProperties => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "flex-start",
    flexShrink: 0,
    height: "28px",
    borderRadius: 100,
    opacity: 0.5,
    boxShadow: "inset 0 0 0 1px " + getBorderColor(title),
    // border: "1px solid #60CC9E",
    backgroundColor: getColor(title),
    // background: "#B3EECD",
})

const TimeBox: React.FC<props> = ({ key, name, ease, duration, width }) => {
    return (
        <div
            key={key}
            style={{
                ...TimeBoxStyle(ease.value),
                width: width * duration + "px",
                visibility: name === "Delay" ? "hidden" : "visible",
            }}
        ></div>
    )
}

export default TimeBox
