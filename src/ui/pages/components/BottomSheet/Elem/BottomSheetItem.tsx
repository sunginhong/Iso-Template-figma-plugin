import React, { useState, useEffect, useRef } from "react"
import "./Items/styles/styles.css"
import Handle from "./Items/Handle"
import Header from "./Items/Header"
import Body from "./Items/Body"
import Button from "./Items/Button"
interface props {
    stateBool?: boolean
    onBottomSheetHeight?: (value: number) => void
}

const BottomSheetItem: React.FC<props> = ({ stateBool, onBottomSheetHeight }) => {
    const [height, setHeight] = useState(0)
    const bottomSheetRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (bottomSheetRef.current) {
            const newHeight = bottomSheetRef.current.offsetHeight
            setHeight(newHeight)
            if (typeof onBottomSheetHeight === "function") {
                onBottomSheetHeight(newHeight)
            }
        }
    }, [bottomSheetRef.current])
    return (
        <div ref={bottomSheetRef} className="bottom-sheet-items">
            <div className="contents">
                <Handle />
                <Header />
                <div
                    style={{
                        marginLeft: "10px",
                        marginRight: "10px",
                        width: "calc(100% - 20px)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        gap: "8px",
                        pointerEvents: "auto"
                    }}
                >
                    <Body />
                    <Button />
                </div>
            </div>
        </div>
    )
}

export default BottomSheetItem
