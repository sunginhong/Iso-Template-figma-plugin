import React, { useEffect, useState, useRef } from "react"
import { setEasing } from "../../SelEasing/SetEasing"

interface Props {
    masking: boolean
    cntResult: number
    cntStep: number
    animStart: boolean
    animDelay: number
    animDuration: number
    animCurve: string
    fontColor: string
    fontFamily: string
    fontSize: number
    fontWeight: number
    onSendRectHeight: (value: number) => void
}

const CountSet_0to5_Guide_re: React.FC<Props> = ({
    masking,
    cntResult,
    cntStep,
    animStart,
    animDelay,
    animDuration,
    animCurve,
    fontColor,
    fontFamily,
    fontSize,
    fontWeight,
    onSendRectHeight,
}) => {
    const count = [0, 1, 2, 3, 4, 5, 0]
    const cntRef = useRef<(HTMLSpanElement | null)[]>([])
    const cntWidthArr = useRef<number[]>([])
    const [offsetHeight, setOffsetHeight] = useState(0)
    const [hold, setHold] = useState(true)
    const [posValue, setPosValue] = useState(0)
    const [widthValue, setWidthValue] = useState(0)
    const [durationValue, setDurationValue] = useState(animDuration)

    // 측정 및 초기화
    useEffect(() => {
        if (cntRef.current[0]) {
            setOffsetHeight(cntRef.current[0].offsetHeight || 0)
        }
    }, [])

    useEffect(() => {
        onSendRectHeight(offsetHeight)
    }, [offsetHeight, onSendRectHeight])

    useEffect(() => {
        const timer = setTimeout(() => setHold(false), 100)
        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        cntWidthArr.current = count.map(
            (_, i) => cntRef.current[i]?.offsetWidth || 0
        )
    }, [offsetHeight])

    useEffect(() => {
        const elemHeight = cntRef.current[0]?.offsetHeight || 0
        if (cntResult === 0) {
            setPosValue(-elemHeight * cntResult)
            setWidthValue(cntWidthArr.current[cntResult])
            setDurationValue(animDuration)
            setTimeout(
                () => {
                    setPosValue(-elemHeight * count.length + elemHeight)
                    setWidthValue(cntWidthArr.current[cntResult])
                    setDurationValue(0)
                },
                1000 * (animDuration + 0.1)
            )
        } else {
            setPosValue(-elemHeight * cntResult)
            setWidthValue(cntWidthArr.current[cntResult])
            setDurationValue(animDuration)
        }
    }, [cntResult, animDuration, count.length])

    return (
        <div
            style={{
                display: "inline-block",
                overflow: "overlay",
                overflowX: "visible",
                height: offsetHeight,
                WebkitMaskImage: masking
                    ? "linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 1) 9%, rgba(0, 0, 0, 1) 91%, transparent 100%)"
                    : "",
                maskImage: masking
                    ? "linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 1) 9%, rgba(0, 0, 0, 1) 91%, transparent 100%)"
                    : "",
            }}
        >
            <div
                style={{
                    display: animStart ? "flex" : "inline-block",
                    flexWrap: "wrap",
                    flexDirection: "column",
                    color: "white",
                    touchAction: "none",
                    animationComposition: "add",
                    width: widthValue + "px",
                    transform: `translateY(${posValue}px)`,
                    transition:
                        "transform " +
                        (hold ? 0 : durationValue) +
                        "s " +
                        "cubic-bezier(" +
                        setEasing(animCurve) +
                        ")" +
                        ", width " +
                        (hold ? 0 : durationValue) +
                        "s " +
                        "cubic-bezier(" +
                        setEasing(animCurve) +
                        ")",
                    transitionDelay: `${animStart ? (hold ? 0 : cntStep * animDelay) : 0}s`,
                }}
            >
                {count.map((num, i) => (
                    <span
                        ref={(el) => (cntRef.current[i] = el)}
                        key={"cnt" + i}
                        style={{
                            flexWrap: "wrap",
                            flexDirection: "column",
                            color: fontColor,
                            textAlign: i === 0 ? "center" : "left",
                            fontFamily,
                            fontSize: fontSize + "px",
                            fontWeight,
                            height: animStart
                                ? offsetHeight > 0
                                    ? offsetHeight + "px"
                                    : "auto"
                                : "0px",
                            width: "auto",
                        }}
                    >
                        {num}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default CountSet_0to5_Guide_re
