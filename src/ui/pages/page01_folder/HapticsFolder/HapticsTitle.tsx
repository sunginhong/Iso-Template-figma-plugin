import React, { MouseEvent, useState } from 'react';

interface EaseTitleProps {
    title?: string;
    memoLine1?: string;
    memoLine2?: string;
    color?: string;
}

const HapticsTitle: React.FC<EaseTitleProps> = ({ title, memoLine1, memoLine2, color }) => {

    return (
        <div style={{
            display: "flex",
            width: "400px",
            padding: "0px 8px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "10px",
            flexShrink: "0",
        }}>
            <p style={{
                color: color,
                fontFamily: "Pretendard Variable",
                fontSize: "28px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "180%",
                margin: "0"
            }}>{title}</p>

            <p style={{
                color: "#6A7078",
                fontFamily: "Pretendard Variable",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "300",
                lineHeight: "180%",
                margin: "0"
            }}>{memoLine1}</p>

            <p style={{
                color: color,
                fontFamily: "Pretendard Variable",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "150%",
                margin: "0"
            }}>적용 예시 l {memoLine2}</p>
        </div>
    );
}
export default HapticsTitle;