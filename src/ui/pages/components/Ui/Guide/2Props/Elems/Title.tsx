import React from "react";

interface Props {
    key?: number
    title?:string
}

const titleStyles: React.CSSProperties = {
    color: "var(--Color-Neutral-Gray-1200, #424242)",
    fontFeatureSettings: "'liga' off, 'clig' off",
    fontFamily: "Pretendard Variable",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "180%", // 25.2px
};

const Title: React.FC<Props> = ({ key, title }) => {
    return <div key={key} style={titleStyles}>{title}:</div>;
};

export default Title;
