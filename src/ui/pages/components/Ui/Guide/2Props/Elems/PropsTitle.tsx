import { color } from "framer-motion"
import { title } from "process"
import React from "react"

interface Props {
    key?: number
    title?: string
}

const EaseProps = [
    { title: "Ease-Standard", color: "#20BB99" },
    { title: "EaseOut", color: "#C066E3" },
    { title: "EaseOut - Level 1", color: "#C066E3" },
    { title: "EaseIn", color: "#EDA445" },
    { title: "EaseInOut", color: "#E34D5A" },
    { title: "Spring", color: "#4A96ED" },
    { title: "Spring - Level 1", color: "#4A96ED" },
    { title: "Spring - Level 2", color: "#4A96ED" },
    { title: "linear", color: "#424242" },
    { title: "Selection", color: "#20BB99" },
    { title: "Selection - 0.5", color: "#20BB99" },
    { title: "Success", color: "#4A96ED" },
    { title: "Error", color: "#E34D5A" },
]
const getTitleColor = (title?: string) => {
    const match = EaseProps.find(e => e.title === title);
    return match ? match.color : "#424242";
};

const contentsStyles = (title?: string): React.CSSProperties => ({
    color: getTitleColor(title),
    fontFeatureSettings: "'liga' off, 'clig' off",
    fontFamily: "Pretendard Variable",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "180%", // 25.2px
});

const PropsTitle: React.FC<Props> = ({ key, title }) => {
    return <div key={key} style={contentsStyles(title)}>{title}</div>
    
}

export default PropsTitle
