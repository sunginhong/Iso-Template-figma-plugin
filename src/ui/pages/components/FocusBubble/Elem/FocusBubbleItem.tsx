import React, { useState, useEffect, useRef } from "react"
import "./Items/styles/styles.css"
import Elem from "./Items/Elem"

interface props {  fnfocusBubbleSize: (value: any) => void}

const FocusBubbleItem: React.FC<props> = ({fnfocusBubbleSize}) => {
    const focusBubbleRef = useRef<HTMLDivElement>(null)
    const [focusBubbleSize, setFocusBubbleSize] = useState<{
        width: number
        height: number
    }>({ width: 0, height: 0 })

  useEffect(() => {
        fnfocusBubbleSize(Boolean(focusBubbleSize.width && focusBubbleSize.height))
    }, [focusBubbleSize, fnfocusBubbleSize])

    React.useEffect(() => {
        if (focusBubbleRef.current) {
            const { width, height } = focusBubbleRef.current.getBoundingClientRect()
            setFocusBubbleSize({ width, height })
        }
    }, [])

    const ElemStyle: React.CSSProperties = {
        display: "flex",
        padding: "0px var(--Medium, 10px)",
        alignItems: "center",
        gap: "var(--XX-Small, 4px)",
        flexShrink: 0,
        cursor: "pointer",
    }

    return (
        <div ref={focusBubbleRef} className="focus-bubble" style={ElemStyle}>
            <Elem/>
        </div>
    )
}

export default FocusBubbleItem
