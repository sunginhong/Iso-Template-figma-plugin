import React, { useEffect, useState, useRef } from "react"
import CountSet_0to9_Guide_re from "./CountSet_0to9_Guide_re"
import CountSet_0to5_Guide_re from "./CountSet_0to5_Guide_re"
import CountDash_Guide_re from "./CountDash_Guide_re"

interface Props {
    timeHour: number
    timeMinute: number
    timeSecond: number
    fontColor: string
    fontFamily: string
    fontSize: number
    fontWeight: number
    masking: boolean
    animStartTimer: number
    animDelay: number
    animDuration: number
    animCurve: string
}

function padTime(time: number) {
    return time < 10 ? `0${time}` : `${time}`
}

const CountDown_Contain_Guide_re: React.FC<Props> = ({
    timeHour,
    timeMinute,
    timeSecond,
    fontColor,
    fontFamily,
    fontSize,
    fontWeight,
    masking,
    animStartTimer,
    animDelay,
    animDuration,
    animCurve,
}) => {
    const counterRef = useRef<HTMLDivElement>(null)
    const [offsetHeight, setOffsetHeight] = useState(0)
    const [hours, setHours] = useState(timeHour === null ? null : padTime(timeHour))
    const [minutes, setMinutes] = useState(timeMinute === null ? null : padTime(timeMinute))
    const [seconds, setSeconds] = useState(timeSecond === null ? null : padTime(timeSecond))
    const [animStart, setAnimStart] = useState(false)

    useEffect(() => {
        const countdown = setInterval(() => {
            let h = parseInt(hours, 10)
            let m = parseInt(minutes, 10)
            let s = parseInt(seconds, 10)

            if (s > 0) {
                s -= 1
            } else if (m > 0) {
                m -= 1
                s = 59
            } else if (h > 0) {
                h -= 1
                m = 59
                s = 59
            } else {
                clearInterval(countdown)
            }

            if (timeHour === null) {
                setHours(null as any)
            } else {
                setHours(padTime(h))
            }
            if (timeMinute === null) {
                setMinutes(null as any)
            } else {
                setMinutes(padTime(m))
            }
            if (timeSecond === null) {
                setSeconds(null as any)
            } else {
                setSeconds(padTime(s))
            }
        }, 1000)
        return () => clearInterval(countdown)

        // eslint-disable-next-line
      
    }, [hours, minutes, seconds])

    useEffect(() => {
        const timeout = setTimeout(() => setAnimStart(true), animStartTimer)
        return () => clearTimeout(timeout)
    }, [animStartTimer])

    useEffect(() => {
    }, [])

    const handleRectHeight = (newValue: number) => setOffsetHeight(newValue)

    const renderDigit = (value: string, isFive: boolean, key: string) =>
        isFive ? (
            <CountSet_0to5_Guide_re
                key={key}
                cntResult={parseInt(value)}
                cntStep={1}
                fontFamily={fontFamily}
                fontSize={fontSize}
                fontWeight={fontWeight}
                fontColor={fontColor}
                masking={masking}
                animDuration={animDuration}
                animDelay={animDelay}
                animCurve={animCurve}
                animStart={animStart}
                onSendRectHeight={handleRectHeight}
            />
        ) : (
            <CountSet_0to9_Guide_re
                key={key}
                cntResult={parseInt(value)}
                cntStep={1}
                fontFamily={fontFamily}
                fontSize={fontSize}
                fontWeight={fontWeight}
                fontColor={fontColor}
                masking={masking}
                animDuration={animDuration}
                animDelay={animDelay}
                animCurve={animCurve}
                animStart={animStart}
                onSendRectHeight={handleRectHeight}
            />
        )

    return (
        <div
            style={{
                position: "relative",
                pointerEvents: "none",
                overflow: "visible",
            }}
        >
            <div
                ref={counterRef}
                className="counter"
                style={{
                    position: "relative",
                    height: offsetHeight + "px",
                    pointerEvents: "none",
                    overflow: "visible",
                    opacity: !animStart ? 0 : 1,
                    transition: `opacity 0.1s linear`,
                  }}
            >
                {hours !== null ? (
                    <>
                        {renderDigit(hours[0], true, "h0")}
                        {renderDigit(hours[1], false, "h1")}
                        <CountDash_Guide_re
                            fontFamily={fontFamily}
                            fontSize={fontSize}
                            fontWeight={fontWeight}
                            fontColor={fontColor}
                            masking={masking}
                        />
                        {renderDigit(minutes[0], true, "m0")}
                        {renderDigit(minutes[1], false, "m1")}
                        <CountDash_Guide_re
                            fontFamily={fontFamily}
                            fontSize={fontSize}
                            fontWeight={fontWeight}
                            fontColor={fontColor}
                            masking={masking}
                        />
                        {renderDigit(seconds[0], true, "s0")}
                        {renderDigit(seconds[1], false, "s1")}
                    </>
                ) : minutes !== null ? (
                    <>
                        {renderDigit(minutes[0], true, "m0")}
                        {renderDigit(minutes[1], false, "m1")}
                        <CountDash_Guide_re
                            fontFamily={fontFamily}
                            fontSize={fontSize}
                            fontWeight={fontWeight}
                            fontColor={fontColor}
                            masking={masking}
                        />
                        {renderDigit(seconds[0], true, "s0")}
                        {renderDigit(seconds[1], false, "s1")}
                    </>
                ) : (
                    <>
                        {renderDigit(seconds[0], true, "s0")}
                        {renderDigit(seconds[1], false, "s1")}
                    </>
                )}
            </div>
        </div>
    )
}

export default CountDown_Contain_Guide_re
