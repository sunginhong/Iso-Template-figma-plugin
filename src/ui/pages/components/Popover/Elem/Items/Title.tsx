import React, { useState, useEffect, useRef } from "react"
import { useTransform, useMotionValue, motion } from "framer-motion"

interface props {}

const Title: React.FC<props> = ({}) => {
    return (
        <div
            style={{
                color: "var(--Neutral-Foreground-1-Default, #000)",
                fontFamily: "var(--Font-Family-Pretendard, Pretendard)",
                fontSize: "var(--Font-Size-200, 14px)",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "130%",
                letterSpacing: "-0.28px",
            }}
        >
            Title
        </div>
    )
}

export default Title
