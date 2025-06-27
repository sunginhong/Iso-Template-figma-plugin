import React, { useEffect, useState } from "react"
import TriggerButton from "../Ui/TriggerButton"
import PopoverItem from "./Elem/PopoverItem"

interface bottomSheetProps {
    previewSize?: { width: number; height: number }
}

const Popover: React.FC<bottomSheetProps> = ({ previewSize }) => {
    const [clickItems, setClickItems] = useState<boolean>(false)
    const [popOverSize, setPopOverSize] = useState<{
        width: number
        height: number
    }>({ width: 0, height: 0 })
    const [hold, setHold] = useState(true)
    let defScaleMin = 0.7
    const [scaleMin, setScaleMin] = useState(defScaleMin)
    const [btnHeight, setBtnHeight] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => setHold(false), 100)
        return () => clearTimeout(timer)
    }, [])

    const handleChildValue = (value: boolean) => {
        setClickItems(value)
        if (value) {
            setScaleMin(defScaleMin)
        } else {
            setScaleMin(1)
            setTimeout(() => setScaleMin(defScaleMin), 150)
        }
    }

    const handleGetBtnHeight = (value: number) => {
        setBtnHeight(value)
    }

    const handleGetPopOverSize = (value: { width: number; height: number }) => {
        setPopOverSize(value)
    }

    return (
        <div
            className="row"
            style={{
                width: previewSize?.width + "px",
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
                    transition: "opacity 0.3s cubic-bezier(0.15, 0, 0.15, 1)",
                    transitionDelay: clickItems ? "0s" : "0.25s",
                }}
            >
                <TriggerButton
                    title={"Open Popover"}
                    stateBool={clickItems}
                    onChangeState={handleChildValue}
                    onItemHeight={handleGetBtnHeight}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    width: popOverSize?.width,
                    height: popOverSize?.height,
                    top: "50%",
                    left: "50%",
                    marginTop: btnHeight + btnHeight + "px",
                    // marginTop: "calc(28px + 28px/2)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 2,
                    transform: `translate(-50%,-50%) scale(${clickItems ? 1 : scaleMin})`,
                    transformOrigin: "top center",
                    opacity: clickItems ? 1 : 0,
                    transition: hold
                        ? "none"
                        : clickItems
                          ? "transform 0.4s cubic-bezier(0.34, 1.5, 0.54, 1), opacity 0.4s cubic-bezier(0.34, 1.5, 0.54, 1)"
                          : "transform 0.15s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.15s cubic-bezier(0.65, 0, 0.35, 1)",
                }}
            >
                <PopoverItem
                    fnPopOverSize={handleGetPopOverSize}
                    onChangeState={handleChildValue}
                />
            </div>
        </div>
    )
}

export default Popover
