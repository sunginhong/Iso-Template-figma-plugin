import React, { useState, useEffect, useRef } from "react"
import MenuTabUi from "./Elem/MenuTabUi"

interface bottomSheetProps {
    previewSize?: { width: number; height: number }
}

const Tab: React.FC<bottomSheetProps> = ({ previewSize }) => {
    const [currentIdx, setCurrentIdx] = useState(0)
    const [way, setWay] = useState("RIGHT")
    const handleChildIdx = (newValue) => {
        setCurrentIdx(newValue)
    }

    type data = {
        tabLabels?: any
        panelImg?: any
        direction?: any
        easing?: string
        duration?: number
    }

    function createMenuTabData(input: Partial<data>): data {
        const result: data = {}
        for (const key in input) {
            if (input[key] !== undefined) {
                result[key] = input[key]
            }
        }
        return result
    }

    const MenuTabData: data[] = [
        createMenuTabData({
            tabLabels: [
                "Label1",
                "Label2",
                "Label3",
                "Label4",
                "Label5",
                "Label6",
                "Label7",
                "Label8",
                "Label9",
                "Label10",
            ],
        }),
    ]

    const duration = MenuTabData[0].duration

    return (
        <div
            className="row"
            style={{
                width: previewSize?.width + "px",
                height: previewSize?.height + "px",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <MenuTabUi
                    MenuTabData={MenuTabData[0]}
                    currentIdx={currentIdx}
                    tabLabels={MenuTabData[0].tabLabels}
                    onChangeIdx={handleChildIdx}
                    duration={duration}
                />
            </div>
        </div>
    )
}

export default Tab
