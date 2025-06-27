import React, { useState, useEffect, useRef } from "react"
import IconGraphics from "./IconGraphics"
interface props {}

const Elem: React.FC<props> = ({}) => {
    const FocusBubbleRef = useRef<HTMLDivElement>(null)

    return (
        <div
            ref={FocusBubbleRef}
            className="contents"
            style={{ width: "122px", height: "45px", justifyContent: "center" }}
        >
            <IconGraphics />
            <div
                style={{
                    position: "absolute",
                    display: "flex",
                    top: "50%",
                    transform: "translateY(-50%)",
                    marginTop: "5px",
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: "5px",
                    width: "122px",
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.1419 4.18314C12.5908 3.63412 11.8591 3.33333 11.0803 3.33333C10.3006 3.33333 9.56827 3.63412 9.01687 4.18314L8.00076 5.1948L6.98135 4.18314C6.42965 3.63412 5.69704 3.33333 4.91914 3.33333C4.14093 3.33333 3.40832 3.63412 2.85782 4.18284C1.71421 5.31876 1.71421 7.16818 2.85692 8.30586L7.05673 12.4195C7.57508 12.9273 8.40426 12.9273 8.92265 12.4196L13.285 8.14724C14.287 7.01749 14.2327 5.26794 13.1419 4.18314Z"
                        fill="white"
                    />
                </svg>
                <p
                    style={{
                        color: "var(--Neutral-Foreground-On-Brand-1-Default, #FFF)",
                        fontFamily: "Pretendard Variable",
                        fontSize: "var(--Font-Size-200, 14px)",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "150%",
                        letterSpacing: "-0.28px",
                    }}
                >
                    Focus Bubble
                </p>
            </div>
        </div>
    )
}

export default Elem
