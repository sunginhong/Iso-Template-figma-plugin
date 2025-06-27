import React, { useState, useEffect, useRef } from "react"

interface props {
    title?: string
    stateBool?: boolean
    onChangeState: (value: boolean) => void
}

const TriggerButton: React.FC<props> = ({
    title,
    stateBool,
    onChangeState,
}) => {
    const btnRef = useRef<HTMLDivElement>(null)

    function fnClick() {
        if (!stateBool) {
            onChangeState(true)
        } else {
            onChangeState(false)
        }
    }
    return (
        <div
            style={{
                display: "flex",
                padding: "6px 12px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "100px",
                backgroundColor: "#D9F7E6",
                cursor: "pointer",
            }}
            onClick={fnClick}
        >
            <span
                style={{
                    color: "#03A94D",
                    textAlign: "center",
                    fontFamily: "SF Pro Display",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "16px",
                }}
            >
                {title}
            </span>
        </div>
    )
}

export default TriggerButton
