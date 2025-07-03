import React, { useState, useEffect, useRef } from "react"

interface props {
    title?: string
    stateBool?: boolean
    onChangeState?: (value: boolean) => void
    onItemHeight?: (value: number) => void
}

const TriggerButton: React.FC<props> = ({
    title,
    stateBool,
    onChangeState,
    onItemHeight,
}) => {
    const btnRef = useRef<HTMLDivElement>(null)
    const [btnHeight, setBtnHeight] = useState(0)

    useEffect(() => {
        onItemHeight(btnHeight)
    }, [btnHeight, onItemHeight])

    useEffect(() => {
        if (btnRef.current) {
            const newHeight = btnRef.current.offsetHeight
            setBtnHeight(newHeight)
        }
    }, [btnRef.current])

    function fnClick() {
        if (!stateBool) {
            onChangeState(true)
        } else {
            onChangeState(false)
        }
    }
    return (
        <div
            ref={btnRef}
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
