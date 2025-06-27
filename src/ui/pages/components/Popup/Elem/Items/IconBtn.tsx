import React, { useState, useEffect, useRef } from "react"

interface props {}

const IconBtn: React.FC<props> = ({}) => {
    return (
        <div
            style={{
                display: "flex",
                width: "25.093px",
                height: "25.093px",
                padding: "6.274px 6.273px 6.273px 6.274px",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
                borderRadius: "823.665px",
                backgroundColor: "rgba(0, 0, 0, 0.00)",
            }}
        >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.85562 2.98452C3.1006 2.73953 3.49781 2.73953 3.74279 2.98452L6.43585 5.67758L9.12891 2.98452C9.37389 2.73953 9.7711 2.73953 10.0161 2.98452C10.2611 3.22951 10.2611 3.62671 10.0161 3.8717L7.32303 6.56476L10.0161 9.25781C10.2611 9.5028 10.2611 9.9 10.0161 10.145C9.7711 10.39 9.37389 10.39 9.12891 10.145L6.43585 7.45193L3.74279 10.145C3.49781 10.39 3.1006 10.39 2.85562 10.145C2.61063 9.9 2.61063 9.5028 2.85562 9.25781L5.54867 6.56476L2.85562 3.8717C2.61063 3.62671 2.61063 3.22951 2.85562 2.98452Z"
                        fill="black"
                    />
                </svg>
        </div>
    )
}

export default IconBtn
