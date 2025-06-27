import React, { useState, useEffect, useRef } from "react"

interface props {}

const Header: React.FC<props> = ({}) => {
    return (
        <div
            className={"header"}
            style={{
                display: "flex",
                width: "100%",
                height: "23.94px",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <span
                style={{
                    display: "-webkit-box",
                    flexShrink: "0",
                    overflow: "hidden",
                    color: "#000",
                    textAlign: "center",
                    textOverflow: "ellipsis",
                    fontFamily: "var(--Font-Family-Pretendard, Pretendard)",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "130%",
                    letterSpacing: "-0.24px",
                }}
            >
                Title
            </span>
        </div>
    )
}

export default Header
