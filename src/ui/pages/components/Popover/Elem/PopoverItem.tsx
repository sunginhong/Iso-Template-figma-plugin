import React, { useState, useEffect, useRef } from "react"
import "./Items/styles/styles.css"
import Elem from "./Items/Elem"

interface props {
    fnPopOverSize: (value: any) => void
    onChangeState: (value: boolean) => void
}

const PopoverItem: React.FC<props> = ({ fnPopOverSize, onChangeState }) => {
    const popOverRef = useRef<HTMLDivElement>(null)
    const [popOverSize, setPopOverSize] = useState<{
        width: number
        height: number
    }>({ width: 0, height: 0 })

    const handleChildValue = (newValue) => {
        onChangeState(newValue)
    }

    useEffect(() => {
        fnPopOverSize(Boolean(popOverSize.width && popOverSize.height))
    }, [popOverSize, fnPopOverSize])

    React.useEffect(() => {
        if (popOverRef.current) {
            const { width, height } = popOverRef.current.getBoundingClientRect()
            setPopOverSize({ width, height })
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
        <div ref={popOverRef} className="pop-over" style={ElemStyle}>
            <Elem onChangeState={handleChildValue} />
        </div>
    )
}

export default PopoverItem
