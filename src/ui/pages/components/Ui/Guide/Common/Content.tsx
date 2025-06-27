import React from "react";

interface Props { title?: string }

const contentStyle = (title?: string): React.CSSProperties => ({
    display: "flex",
    minWidth: title === "Property" ? "300px" : "120px",
    width: title === "Property" ? "60%" : "20%",
    padding: "12px 0px",
    alignItems: "center", // 세로 가운데 정렬
    justifyContent: "center", // 가로 가운데 정렬
    flexShrink: 0,
    borderRight: title === "Property" ? null : "1px solid #D9D9D9" 
});

const Content: React.FC<Props> = ({ title }) => {
    return (
        <div style={contentStyle(title)}>
            <p style={{ margin: 0 }}>{title}</p>
        </div>
    );
};

export default Content;