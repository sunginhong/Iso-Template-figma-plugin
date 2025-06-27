import React, { useEffect, useState } from "react"
import TriggerButton from "./Elem/TriggerButton"
import PopupItem from './Elem/PopupItem';

interface bottomSheetProps {
    previewSize?: { width: number; height: number }
}

const Popup: React.FC<bottomSheetProps> = ({ previewSize }) => {
    const [clickItems, setClickItems] = useState<boolean>(false)
    const [popupSize, setPopupSize] = useState<{
            width: number
            height: number
        }>({ width: 0, height: 0 })
    const [hold, setHold] = useState(true)
    let defScaleMin = 0.95
    const [scaleMin, setScaleMin] = useState(defScaleMin)

    useEffect(() => {
        const timer = setTimeout(() => setHold(false), 100)
        return () => clearTimeout(timer)
    }, [])

    const handleChildValue = (value: boolean) => {
        setClickItems(value)
        if (value) {
            setScaleMin(0.98)
        } else {
            setScaleMin(1)
            setTimeout(() => setScaleMin(defScaleMin), 150)
        }
    }

    const handleGetPopupSize = (value: { width: number; height: number }) => {
        setPopupSize(value)
    }
    useEffect(() => {}, [previewSize])

    return (
        <div
            className="row"
            style={{
               width: previewSize?.width+ "px",
                height: previewSize?.height + "px",
                position: "relative",
            }}
        >
         
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                        opacity: clickItems ? 0 : 1,
                        transition: "opacity 0.3s cubic-bezier(0.15, 0, 0.15, 1)",  
                        transitionDelay: clickItems ? "0s" : "0.25s",
                    }}
                >
                    <TriggerButton
                        title={"Open Popup"}
                        stateBool={clickItems}
                        onChangeState={handleChildValue}
                    />
                </div>
            <div
                className="dimd"
                style={{
                    position: "absolute",
                    width: previewSize?.width,
                    height: previewSize?.height,
                    backgroundColor: "#D9D9D9",
                    opacity: clickItems ? 1 : 0,
                    transition: clickItems
                        ? "opacity 0.2s cubic-bezier(0.65, 0, 0.35, 1)"
                        : "opacity 0.15s cubic-bezier(0.65, 0, 0.35, 1)",
                    cursor: clickItems ? "pointer" : "default",
                    pointerEvents: clickItems ? "auto" : "none",
                }}
                onClick={() => {
                    setClickItems(false)
                }}
            ></div>
            <div
                style={{
                    position: "absolute",
                    width: popupSize?.width,
                    height: popupSize?.height,
                    top: "50%",
                    left: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 2,
                    transform: `translate(-50%,-50%) scale(${clickItems ? 1 : scaleMin})`,
                    opacity: clickItems ? 1 : 0,
                    transition: hold
                        ? "none"
                        : clickItems
                          ? "transform 0.4s cubic-bezier(0.33, 1, 0.68, 1), opacity 0.3s cubic-bezier(0.33, 1, 0.68, 1)"
                          : "transform 0.15s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.15s cubic-bezier(0.65, 0, 0.35, 1)",
                    pointerEvents: clickItems ? "auto" : "none",
                }}
            >
                <PopupItem
                    fnPopupSize={handleGetPopupSize}
                    onCloseState={handleChildValue}
                />
            </div>
        </div>
    )
}

export default Popup
