import React, { useEffect, useState, useRef } from "react"

interface EaseCanvasProps {
    curve?: React.ReactNode;
    selector?: boolean;
    color?: any;
}

const EaseCanvas: React.FC<EaseCanvasProps> = ({ curve, selector, color }) => {
    
    const canvasRef = useRef()
    const [hover, setHover] = useState(false)
    const [graphState, setGraphState] = useState("")
    const [graphAnim, setGraphAnim] = useState(false)
    const [headerAnim, setHeaderAnim] = useState(false)
    let graphMargin = 21
    let strokeWidth = 1
    let graphHeight = 174 - graphMargin
    let itemSize = 12
    let itemPos = { x: 0, y: 6 }
    let animDuration = 2000
    let animTimer = animDuration
    let canvasRect = { width: 148, height: 188 }
    let dimdColor = "gray"

    const [currentEase, setCurrentEase] = useState(curve)

    const returnNewValues = (array) => {
        const newValues = array.map((el) => (1 - el).toFixed(2))
        return [newValues[2], newValues[3], newValues[0], newValues[1]]
    }

    const createPath = (array) =>
        `M.${itemSize/2} ${canvasRect.height} c${array[0] * (canvasRect.height + 0)}-${
            array[1] * (graphHeight - itemSize)
        } ${array[2] * (canvasRect.height + 0)}-${array[3] * graphHeight} ${
            canvasRect.width
        }-${graphHeight-itemSize/2}`
        

    const calculateResult = () => {
        const initialValues = currentEase
        const pathC1 = createPath(initialValues)
        setGraphState(pathC1)
    }

    function fnGraphAnim1() {
        setGraphAnim(false)
        const timer = setTimeout(() => {
            fnGraphAnim2()
        }, animTimer)
        return () => {
            clearInterval(timer)
        }
    }

    function fnGraphAnim2() {
        setGraphAnim(true)
        const timer = setTimeout(() => {
            fnGraphAnim1()
        }, animTimer)
        return () => {
            clearInterval(timer)
        }
    }

    useEffect(() => {
        calculateResult()
    }, [])

    useEffect(() => {
        setGraphAnim(false)
        if (hover) {
            setHeaderAnim(false)
            setGraphAnim(true)
            const timer = setTimeout(() => {
                fnGraphAnim2()
            }, animTimer)
            return () => {
                clearInterval(timer)
            }
        }
    }, [hover])

    return (
        <div
            style={{
                width: "160px",
                height: "160px",
                cursor: selector ? "pointer" : "default",
                backgroundColor: "white",
                filter: selector
                    ? hover
                        ? "brightness(0.9)"
                        : "brightness(1)"
                    : "brightness(1)",
                transition: selector
                    ? "all 300ms cubic-bezier(0.15, 0, 0.15, 1)"
                    : "all 000ms linear",
            }}
            onMouseOver={() => {
                setHover(true)
            }}
            onMouseOut={() => setHover(false)}
        >
            <div
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        width: "calc(100% - 42px)",
                        height: "calc(100% -" + graphMargin + "px)",
                        margin: "0px " + 0+"px " + 0+"px " + graphMargin+"px",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            width: "calc(100% - " + 0 + "px)",
                            height: "calc(100% - " + 0 + "px)",
                            marginTop: 0,
                            top: "-" + graphMargin/2 + "px",
                        }}
                    >
                        <div style={{ position: "absolute", width: "100%" }}>
                            <svg
                                id="c1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox={
                                    "0 0 " +
                                    canvasRect.width +
                                    " " +
                                    canvasRect.height
                                }
                                style={{
                                    position: "absolute",
                                }}
                            >
                                <rect
                                    x="0"
                                    y="0"
                                    width={canvasRect.width}
                                    height={canvasRect.height}
                                    fill="none"
                                />
                                <path
                                    ref={canvasRef}
                                    fill="none"
                                    stroke={hover ? color : dimdColor}
                                    stroke-width={strokeWidth}
                                    d={graphState}
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        position: "absolute",
                        width: "119px",
                        height: "119px",
                        left: graphMargin + "px",
                        top: graphMargin + "px",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="119"
                            height="119"
                            viewBox="0 0 119 119"
                            fill="none"
                        >
                            <path
                                opacity="0.5"
                                d="M1 0V118H119"
                                stroke="#595959"
                            />
                        </svg>
                    </div>
                    <div
                        style={{
                            position: "absolute",
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="119"
                            height="119"
                            viewBox="0 0 119 119"
                            fill="none"
                        >
                            <path
                                d="M118 119L118 1.00026L-1.63477e-06 1.00025"
                                stroke="#B8B8B8"
                                stroke-width="0.5"
                                stroke-dasharray="8 8"
                            />
                        </svg>
                    </div>
                    <div style={{
                            position: "absolute",        width: "100%",
                            height: "100%",
                            zIndex: -1,
                            overflow: "hidden"
                        }}>     
                         <div style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            backgroundColor: color,
                            opacity: 0.1,
                            transform: hover? "translateX(0px)" : "translateX(-100%)",
                            transition: "all 300ms cubic-bezier(" + currentEase + ")",
                        }}></div>
                        </div>
                </div>
            </div>
        </div>
    )
};

export default EaseCanvas;