import React, { useState, useEffect, useRef } from "react"

interface Props {
    currentIdx?: number
    tabLabels?: any
    MenuTabHeader?: any
    onChangeIdx: (value: number) => void
    duration?: number
    scrollX?: number
}

const MenuTabComp: React.FC<Props> = ({
    currentIdx = 0,
    tabLabels = [],
    onChangeIdx,
}) => {
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
    const listItemRef = useRef<Array<HTMLDivElement | null>>([])
    const scrollRef = useRef<HTMLDivElement>(null)
    const scPadding = 12 

    useEffect(() => {
        const el = listItemRef.current[currentIdx]
        if (el) {
            setIndicatorStyle({
                left: el.offsetLeft,
                width: currentIdx < tabLabels?.length-1 ? el.offsetWidth : el.offsetWidth - scPadding,
            })
        }
    }, [currentIdx, tabLabels])

    const handleTabClick = (i: number) => {
        onChangeIdx(i)
   
        scrollToAnchor(scrollRef, listItemRef.current[i]?.offsetLeft  - 393/2 + (indicatorStyle.width/2), 0)
    }

    function easeOutCubic(t: number) {
        return 1 - Math.pow(1 - t, 3)
    }

    function scrollToAnchor(
        ref: React.RefObject<HTMLElement>,
        to: number,
        duration: number
    ) {
        if (!ref.current) return
        if (duration === 0) {
            ref.current.scrollLeft = to
            return
        }
        const start = ref.current.scrollLeft
        const change = to - start
        const startTime = performance.now()

        function animateScroll(currentTime: number) {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const ease = easeOutCubic(progress)
            if (ref.current) {
                ref.current.scrollLeft = start + change * ease
            }
            if (progress < 1) {
                requestAnimationFrame(animateScroll)
            }
        }

        requestAnimationFrame(animateScroll)
    }

    return (
        <div
            style={{
                display: "flex",
                width: "393px",
                height: "54px",
                justifyContent: "space-between",
                alignItems: "flex-end",
                flexShrink: "0",
                backgroundColor: "white",
                overflow: "hidden",
                position: "relative",
            }}
        >
            <div
                style={{
                    width: "100%",
                    height: "1px",
                    position: "absolute",
                    backgroundColor: "rgba(0, 0, 0, 0.15)",
                    left: "0",
                }}
            ></div>
            <div
                style={{
                    width: "100%",
                    height: 54,
                    overflow: "hidden",
                }}
            >
                <div
                    ref={scrollRef}
                    style={{
                        // width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        overflowX: "scroll",
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                        scrollBehavior: "smooth",
                    }}
                    onScroll={() => {
                  
                    }}
                >
                    <div
                        style={{
                            height: 54,
                            position: "relative",
                            display: "flex",
                            justifyContent: "start",
                            flexDirection: "row",
                            gap: "6px",
                            alignItems: "center",
                            flex: "1 0 0",
                            paddingLeft: scPadding + "px",
                            // marginRight: "20px",
                        }}
                    >
                        {tabLabels.map((item, index) => (
                            <div
                                key={index}
                                ref={(el) => (listItemRef.current[index] = el)}
                                style={{
                                    display: "flex",
                                    height: "35px",
                                    minWidth: "60px",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: "11px",
                                    position: "relative",
                                    paddingLeft: "6px",
                                    // paddingRight: "8px",
                                    cursor: "pointer",
                                    whiteSpace: "nowrap",
                                    fontStyle: "normal",
                                    paddingRight: index < tabLabels?.length-1 ? "6px" :scPadding+"px",
                                    fontWeight:
                                        currentIdx === index ? 700 : 500,
                                    color:
                                        currentIdx === index
                                            ? "#000"
                                            : "#737373",
                                    fontSize: 18,
                                    lineHeight: "130%",
                                    justifyContent: "center",
                                }}
                                onClick={() => handleTabClick(index)}
                            >
                                {item}
                            </div>
                        ))}
                        <div
                            className="indicator"
                            style={{
                                position: "absolute",
                                left: indicatorStyle.left,
                                top: 54 - (2 + 1),
                                height: 2,
                                width: indicatorStyle.width,
                                backgroundColor: "#000",
                                borderRadius: 999,
                                transition:
                                    "left 0.3s cubic-bezier(0.4,0,0.2,1), width 0.3s cubic-bezier(0.4,0,0.2,1)",
                                zIndex: 5,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuTabComp
