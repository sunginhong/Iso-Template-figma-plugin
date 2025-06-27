import React, { useState, useEffect , useRef } from "react"

interface Props {
    title?: string;
}

const labelStyle: React.CSSProperties = {
    display: "flex",
    padding: "6px 16px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    borderRadius: 100,
    background: "var(--Color-Accent-Green-100, #D9F7E6)",
};

const labelTextStyle: React.CSSProperties = {
    color: "var(--Color-Accent-Green-700, #03A94D)",
    textAlign: "center",
    fontFamily: "SF Pro Display",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "16px",
    fontFeatureSettings: "'liga' off, 'clig' off",
};

const Label: React.FC<Props> = ({ title }) => (
    <div style={labelStyle}>
        <p style={labelTextStyle}>{title}</p>
    </div>
);

export default Label;
