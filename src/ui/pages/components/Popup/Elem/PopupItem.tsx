import React, { useState, useEffect, useRef } from "react"
import "./Items/styles/styles.css"
import Header from "./Items/Header"
import IconBtn from "./Items/IconBtn"
import Body from "./Items/Body"

interface props {  fnPopupSize: (value: any) => void,  onCloseState: (value: boolean) => void}

const PopupItem: React.FC<props> = ({fnPopupSize, onCloseState}) => {
    const popUpRef = useRef<HTMLDivElement>(null)
    const [popupSize, setPopupSize] = useState<{
        width: number
        height: number
    }>({ width: 0, height: 0 })

    useEffect(() => {
        fnPopupSize(Boolean(popupSize.width && popupSize.height))
    }, [popupSize, fnPopupSize])

    React.useEffect(() => {
        if (popUpRef.current) {
            const { width, height } = popUpRef.current.getBoundingClientRect()
            setPopupSize({ width, height })
        }
    }, [])

    const fnClick = () => {
        onCloseState(false)
    }

    const cardBgStyle: React.CSSProperties = {
        width: "202px",
        height: "212.037px",
        justifyContent: "center",
        alignItems: "center",
        flexShrink: 0,
        borderRadius: "13.192px",
        border: "1.237px solid #D9D9D9",
        backgroundColor: "#FFFFFF",
        boxShadow:
            "0px 3.764px 5.019px 0px rgba(0, 0, 0, 0.16), 0px 1.255px 2.509px 0px rgba(0, 0, 0, 0.06)",
    }
    
    return (
        <div ref={popUpRef} className="popup-items">
            <div className="contents">
                <div style={cardBgStyle}>
                    <div style={{ width: "100%", height: "31px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                            <Header />
                        </div>
                        <div onClick={fnClick} style={{cursor: "pointer"}}><IconBtn /></div>
                    </div>
                    <Body />
                </div>
            </div>
        </div>
    )
}

export default PopupItem
