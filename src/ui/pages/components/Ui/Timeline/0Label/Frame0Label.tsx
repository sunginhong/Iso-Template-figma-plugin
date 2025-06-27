import React, { useState, useEffect, useRef } from "react"
import Label from "./Elems/Label"

interface props {
    idxOrder?: any
    title?: string
}

const Frame0Label: React.FC<props> = ({ idxOrder, title }) => {
    return (
        <div
            style={{
                width: "120px",
                paddingTop: idxOrder[0] === 0 ? "10px" : "4px",
                paddingBottom: idxOrder[0] === idxOrder[1] ? "20px" : "4px",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                }}
            >
                <Label title={title} />
            </div>
        </div>
    )
}

export default Frame0Label
