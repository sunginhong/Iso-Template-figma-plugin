import React, { useState, useEffect, useRef } from "react"

interface Props {}

const Header: React.FC<Props> = () => {
    const HeaderRef = useRef<HTMLDivElement>(null)
    const [Headerwidth, setHeaderWidth] = useState(0)

    useEffect(() => {
        if (HeaderRef.current) {
            const newWidth = HeaderRef.current.offsetWidth
            setHeaderWidth(newWidth)
        }
    }, [HeaderRef.current])
   
    return (
        <div
            ref={HeaderRef}
            className="header"
            style={{
                display: "inline-flex",
                padding: "0px",
                justifyContent: "center",
                alignItems: "center",
                transform: `translateX(${Headerwidth}px)`,
            }}
        >
            <span
                style={{
                    color: "var(--Neutral-Foreground-1-Default, #000)",
                    textAlign: "center",
                    fontFamily: "var(--Font-Family-Pretendard, Pretendard)",
                    fontSize: "11.543px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "130%",
                    letterSpacing: "-0.231px",
                }}
            >
                Title
            </span>
        </div>
    )
}

export default Header
