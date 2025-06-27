import React, { MouseEvent, useState } from 'react';

interface EaseTitleProps {
    title?: string;
    color?: string;
}

const EaseTitle: React.FC<EaseTitleProps> = ({ title, color }) => {

    return (
        <>
        <p style={{
            color: color,
            fontFamily: "Pretendard Variable",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "180%",
            margin: "0"
        }}>{title}</p>
        </>
    );
}
export default EaseTitle;