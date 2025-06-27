import React, { useState, useEffect, useRef } from "react"

interface props {}

const Button: React.FC<props> = ({}) => {
    return (
        <div
            className="footer"
            style={{
                display: "flex",
                width: "100%",
                height: "23.94px",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                className="button"
                style={{
                    display: "flex",
                    width: "100%",
                    height: "23.94px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                    borderRadius: "4.879px",
                    background:
                        "var(--Neutral-Background-Transparent-2-Default, rgba(0, 0, 0, 0.03))",
                }}
            >
                <div
                    className="buttonLabel"
                    style={{
                        display: "flex",
                        width: "100%",
                        height: "10px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "0px",
                        flexShrink: "0",
                    }}
                >
                    <span
                        style={{
                            color: "#000",
                            overflow: "hidden",
                            textAlign: "center",
                            textOverflow: "ellipsis",
                            fontFamily:
                                "var(--Font-Family-Pretendard, Pretendard)",
                            fontSize: "9px",
                            fontStyle: "normal",
                            fontWeight: "500",
                            lineHeight: "130%",
                            letterSpacing: "-0.18px",
                        }}
                    >
                        Button
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Button
