import React, { useState, useEffect, useRef } from "react"
import Label from "./Elems/Label"

interface props {
    title?: string
}

const Frame0Label: React.FC<props> = ({ title }) => {
    return (
        <div
            style={{
                minWidth: "120px",
                width: "20%",
                borderRight: "1px solid #E5E5E5",
                paddingTop: "10px",
                paddingBottom: "10px",
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
