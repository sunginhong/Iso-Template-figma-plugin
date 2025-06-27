import React from "react";

interface props {rowHeight?: number}

const Line: React.FC<props> = ({rowHeight}) => {
    const lineStyle: React.CSSProperties = {
    // flex: "1 0 0",
    alignSelf: "stretch",
    background: "var(--Color-Neutral-Gray-500, #D9D9D9)",
    height: "100%",
    width: "1px",
};

    return <div style={lineStyle}></div>;
};

export default Line;


