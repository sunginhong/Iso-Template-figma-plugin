import React, { useState, useEffect, useRef } from "react"

import Frame0Label from "./0Label/Frame0Label"
import Frame1Action from "./1Action/Frame1Action"
import Frame2Timeline from "./2Props/Frame2Timeline"
import Handle from "../../BottomSheet/Elem/Items/Handle"
import { u } from "framer-motion/dist/types.d-CQt5spQA"

interface props {
    data, previewSize?: any
}

const GuideTimeline: React.FC<props> = ({ data, previewSize }) => {
    const timesSet = []
    const [totalTime, setTotalTime] = useState<number>(0)

    const guideTableStyles: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        borderRadius: "8px",
        overflow: "hidden",
    }

    const handleOnValues = (value: number) => {
        timesSet.push(value)
        if (timesSet.length === data.length) {
            const maxValue = Math.max(...timesSet)
            timesSet.length = 0
            setTotalTime(maxValue)
        }
    }
  
    return (
        <div className="timelineTable" style={guideTableStyles}>
            {data.map((item, index) => (
                <div
                    key={index}
                    style={{
                        flexDirection: "row",
                        display: "flex",
                    }}
                >
                    <Frame0Label idxOrder={[index, data.length-1]} title={item.labels} />
                    <Frame1Action idxOrder={[index, data.length-1]} action={item.actions} />
                    <Frame2Timeline
                        idxOrder={[index, data.length-1]} 
                        lastItem={index === data.length - 1}
                        props={item.props}
                        length={data.length}
                        onValues={handleOnValues}
                        totalTime={totalTime}
                    />
                </div>
            ))}
        </div>
    )
}

export default GuideTimeline
