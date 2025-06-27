import React, { useState, useEffect, useRef } from "react"
import { useTransform, useMotionValue, motion } from "framer-motion"

interface props {}

const Contents: React.FC<props> = ({}) => {
    return (
        <div
            style={{
                width: "176px",
                flexShrink: 0,
                color: "var(--Neutral-Foreground-2-Default, #424242)",
                fontFamily: "var(--Font-Family-Pretendard, Pretendard)",
                fontSize: "var(--Font-Size-100, 12px)",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "150%",
                letterSpacing: "-0.24px",
            }}
        >
            Contents
        </div>
    )
}

export default Contents
