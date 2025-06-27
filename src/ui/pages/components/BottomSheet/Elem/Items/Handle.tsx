import React, { useState, useEffect, useRef } from "react"

interface props {}

const Handle: React.FC<props> = ({}) => {
    return (
        <div
            className="handle"
            style={{  width: "100%", height: "11.97px" }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="196"
                height="12"
                viewBox="0 0 196 12"
                fill="none"
            >
                <rect
                    x="88.0252"
                    y="5.98492"
                    width="19.9497"
                    height="2.49371"
                    rx="1.24685"
                    fill="#E4E5EB"
                />
            </svg>
        </div>
    )
}

export default Handle
