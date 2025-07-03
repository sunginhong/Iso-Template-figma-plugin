import React, { useEffect, useState } from "react"
import TriggerButton from "../00Common/TriggerButton/TriggerButton"
import PopupItem from './Elem/PopupItem';
import EasingListSelProps from "../../page00_folder/EasingListSelProps"
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
    const [easeStand, setEaseStand] = useState<Array<string>>([])
    const [easeOut, setEaseOut] = useState<Array<string>>([])
    const [easeInOut, setEaseInOut] = useState<Array<string>>([])

    useEffect(() => {
        setEaseStand(EasingListSelProps("ease_Standard")[1])
        setEaseOut(EasingListSelProps("ease_Out")[1])
        setEaseInOut(EasingListSelProps("ease_InOut")[1])
    }, [])

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

    const handleGetBtnHeight = (value: number) => {
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
                        transition: "opacity 0.3s cubic-bezier(" + easeStand[0] + ", " + easeStand[1] + ", " + easeStand[2] + ", " + easeStand[3] + ")",  
                        transitionDelay: clickItems ? "0s" : "0.25s",
                    }}
                >
                    <TriggerButton
                        title={"Open Popup"}
                        stateBool={clickItems}
                        onChangeState={handleChildValue}
                        onItemHeight={handleGetBtnHeight}
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
                        ? "opacity 0.2s cubic-bezier(" + easeInOut[0] + ", " + easeInOut[1] + ", " + easeInOut[2] + ", " + easeInOut[3] + ")"
                        : "opacity 0.15s cubic-bezier(" + easeInOut[0] + ", " + easeInOut[1] + ", " + easeInOut[2] + ", " + easeInOut[3] + ")",
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
                          ? "transform 0.4s cubic-bezier(" + easeOut[0] + ", " + easeOut[1] + "" + easeOut[2] + "" + easeOut[3] + "), opacity 0.3s cubic-bezier(" + easeOut[0] + ", " + easeOut[1] + "" + easeOut[2] + "" + easeOut[3] + ")"
                          : "transform 0.15s cubic-bezier(" + easeInOut[0] + ", " + easeInOut[1] + ", " + easeInOut[2] + ", " + easeInOut[3] + "), opacity 0.15s cubic-bezier(" + easeInOut[0] + ", " + easeInOut[1] + ", " + easeInOut[2] + ", " + easeInOut[3] + ")",
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
