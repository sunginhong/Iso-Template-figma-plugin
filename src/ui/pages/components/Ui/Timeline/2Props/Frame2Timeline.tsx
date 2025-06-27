import React, { useState, useEffect, useRef } from "react"
import TimeBox from "./Elems/TimeBox"
import Line from "./Elems/Line"

interface Frame2PropsProps {
    idxOrder?: any
    lastItem?: boolean
    props?: { name: string; value: string }[]
    onValues: (value: number) => void
    totalTime?: number
    length?: number
}

const framePropsStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: "20px",
}

const propsItemStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "flex-start",
    flexShrink: 0,
}

const Frame2Timeline: React.FC<Frame2PropsProps> = ({
    idxOrder,
    lastItem = false,
    props = [],
    onValues,
    totalTime,
    length,
}) => {
    const frameRef = useRef<HTMLDivElement>(null)
    const [rowHeight, setRowHeight] = useState<number>(0)
    const TimeBoxWidth = 80
    const [Frame2TimelinePos, setFrame2TimelinePos] = useState<{
        x: number
        y: number
    }>({ x: 0, y: 0 })

    useEffect(() => {
        if (frameRef.current) {
            const { height } = frameRef.current.getBoundingClientRect()
            setRowHeight(height)
        }
    }, [frameRef])

    useEffect(() => {
        if (frameRef.current) {
            const positionX = frameRef.current.getBoundingClientRect().left
            const positionY = frameRef.current.getBoundingClientRect().top
            setFrame2TimelinePos({ x: positionX, y: positionY })
        }
    }, [frameRef])

    useEffect(() => {}, [])

    return (
        <div
            className="frameTimeline"
            ref={frameRef}
            style={{
                ...framePropsStyles,
                paddingTop: idxOrder[0] === 0 ? "10px" : "4px",
                paddingBottom: idxOrder[0] === idxOrder[1] ? "20px" : "4px",
            }}
        >
            <div
                style={{
                    height: "100%",
                    width: (totalTime + 2) * TimeBoxWidth + "px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "left",
                    alignItems: "center",
                    flexShrink: 0,
                }}
            >
                {(() => {
                    const durationProp = props.find(
                        (p) => p.name === "Duration"
                    )
                    const delayProp = props.find((p) => p.name === "Delay")
                    const duration = durationProp
                        ? parseFloat(durationProp.value.split("s")[0]) * 10
                        : 0
                    const delay = delayProp
                        ? parseFloat(delayProp.value.split("s")[0]) * 10
                        : 0
                    const maxValue = Math.max(duration + delay, duration, delay)

                    useEffect(() => {
                        onValues(maxValue)
                    }, [maxValue, onValues])

                    return (
                        <div style={{ ...propsItemStyle }}>
                            {["Duration"].map((name, idx) => {
                                const prop = props.find((p) => p.name === name)
                                return prop ? (
                                    <div
                                        style={{
                                            position: "absolute",
                                            width:
                                                (totalTime + 2) * TimeBoxWidth +
                                                "px",
                                            height: rowHeight + "px",
                                        }}
                                    >
                                        {Array.from({
                                            length: totalTime + 2,
                                        }).map((_, i) => (
                                            <Line
                                                key={i}
                                                idx={idx}
                                                index={i}
                                                rowHeight={rowHeight}
                                                TimeBoxWidth={TimeBoxWidth}
                                                lastItem={lastItem}
                                            />
                                        ))}
                                    </div>
                                ) : null
                            })}
                        </div>
                    )
                })()}
                <div style={{ ...propsItemStyle }}>
                    {["Delay", "Duration"].map((name, idx) => {
                        const prop = props.find((p) => p.name === name)
                        return prop ? (
                            <TimeBox
                                key={idx}
                                name={name}
                                duration={
                                    parseFloat(prop.value.split("s")[0]) * 10
                                }
                                width={TimeBoxWidth}
                            />
                        ) : null
                    })}
                </div>
            </div>
        </div>
    )
}

export default Frame2Timeline
