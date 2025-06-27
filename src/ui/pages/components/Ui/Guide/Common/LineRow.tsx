import React, { useState, useEffect, useRef } from "react"

interface props {tableWidth?: number, previewSize?: { width: number; height: number } }

const LineRow: React.FC<props> = ({tableWidth, previewSize}) => {
    const lineRowStyle: React.CSSProperties = {
        // width: tableWidth + "px",
        width: previewSize?.width + "px",
        height: "1px",
        backgroundColor: "#F0F0F0",
    }

    return <div style={lineRowStyle} />
}

export default LineRow
