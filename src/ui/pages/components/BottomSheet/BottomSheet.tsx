import React, { useEffect, useState } from "react"
import TriggerButton from "../00Common/TriggerButton/TriggerButton"
import BottomSheetItem from "./Elem/BottomSheetItem"
import EasingListSelProps from "../../page00_folder/EasingListSelProps"

interface bottomSheetProps {
    previewSize?: { width: number; height: number }
    padding?: number
}

const BottomSheet: React.FC<bottomSheetProps> = ({ previewSize, padding }) => {
    const [clickItems, setClickItems] = useState<boolean>(false)
    const [itemHeight, setItemHeight] = useState(0)
    const [hold, setHold] = useState(true)
    const [btnHeight, setBtnHeight] = useState(0)
    const [easeStand, setEaseStand] = useState<Array<string>>([])

    useEffect(() => {
        const timer = setTimeout(() => setHold(false), 100)
        return () => clearTimeout(timer)
    }, [])

    const handleChildValue = (value: boolean) => {
        setClickItems(value)
    }

    const handleGetBtnHeight = (value: number) => {
        setBtnHeight(value)
    }

    const handleGetHeight = (value: number) => {
        setItemHeight(value)
    }

    useEffect(() => {}, [previewSize])

    useEffect(() => {
        setEaseStand(EasingListSelProps("ease_Standard")[1])
    }, [])

    return (
        <div
            className="row"
            style={{
                width: "100%",
                height: itemHeight + padding,
                marginTop: -padding + "px",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    width: previewSize?.width,
                    height: itemHeight + padding,
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                        opacity: clickItems ? 0 : 1,
                        transition:
                            "opacity 0.3s cubic-bezier(" +
                            easeStand[0] +
                            ", " +
                            easeStand[1] +
                            ", " +
                            easeStand[2] +
                            ", " +
                            easeStand[3] +
                            ")",
                        transitionDelay: clickItems ? "0s" : "0.25s",
                    }}
                >
                    <TriggerButton
                        title={"Open Bottom Sheet"}
                        stateBool={clickItems}
                        onChangeState={handleChildValue}
                        onItemHeight={handleGetBtnHeight}
                    />
                </div>
            </div>
            <div
                className="dimd"
                style={{
                    position: "absolute",
                    width: previewSize?.width,
                    height: itemHeight + padding,
                    backgroundColor: "#D9D9D9",
                    opacity: clickItems ? 1 : 0,
                    transition: clickItems
                        ? "opacity 0.3s cubic-bezier(" +
                          easeStand[0] +
                          ", " +
                          easeStand[1] +
                          ", " +
                          easeStand[2] +
                          ", " +
                          easeStand[3] +
                          ")"
                        : "opacity 0.25s cubic-bezier(" +
                          easeStand[0] +
                          ", " +
                          easeStand[1] +
                          ", " +
                          easeStand[2] +
                          ", " +
                          easeStand[3] +
                          ")",
                    cursor: clickItems ? "pointer" : "default",
                    pointerEvents: clickItems ? "auto" : "none",
                }}
                onClick={() => {
                    setClickItems(false)
                }}
            ></div>
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    left: 0,
                    zIndex: 2,
                    transform: `translateY(${clickItems ? padding / 2 : itemHeight + padding}px)`,
                    transition: hold
                        ? "transform 0s "
                        : clickItems
                          ? "transform 0.4s cubic-bezier(" +
                            easeStand[0] +
                            ", " +
                            easeStand[1] +
                            ", " +
                            easeStand[2] +
                            ", " +
                            easeStand[3] +
                            ")"
                          : "transform 0.35s cubic-bezier(" +
                            easeStand[0] +
                            ", " +
                            easeStand[1] +
                            ", " +
                            easeStand[2] +
                            ", " +
                            easeStand[3] +
                            ")",
                    pointerEvents: "none",
                }}
            >
                <BottomSheetItem
                    stateBool={clickItems}
                    onBottomSheetHeight={handleGetHeight}
                />
            </div>
        </div>
    )
}

export default BottomSheet
