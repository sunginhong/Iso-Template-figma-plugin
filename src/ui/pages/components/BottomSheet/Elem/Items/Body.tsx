import React, { useState, useEffect, useRef } from "react"
import { useTransform, useMotionValue, motion } from "framer-motion"

interface props {}

const Body: React.FC<props> = ({}) => {
    return (
        <div
            className="body"
            style={{
                display: "flex",
                width: "100%",
                height: "164.199px",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
            }}
        >
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    height: "164.199px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                    backgroundColor: "#F0F0F0",
                
                }}
            >
                <span
                    style={{
                        color: "rgba(0, 0, 0, 0.40)",
                        textAlign: "center",
                        fontFamily: "var(--Font-Family-Pretendard, Pretendard)",
                        fontSize: "10px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "150%",
                        letterSpacing: "-0.2px",
                    }}
                >
                    Contents Area
                </span>
            </div>
        </div>
    )
}

export default Body
