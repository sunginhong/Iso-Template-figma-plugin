import React, { useState, useEffect, useRef } from "react"
import { useTransform, useMotionValue, motion } from "framer-motion"

interface props {
    onChangeState: (value: boolean) => void
}

const CloseIcon: React.FC<props> = ({ onChangeState }) => {
    function fnClick() {
        onChangeState(false)
    }

    return (
        <div
            style={{
                display: "flex",
                width: "24px",
                height: "24px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                right: "8px",
                top: "8px",
                borderRadius: "999px",
                pointerEvents: "auto",
                backgroundColor:
                    "var(--Neutral-Background-Transparent-1-Default, rgba(0, 0, 0, 0.00))",
            }}
            onClick={fnClick}
        >
            <div
                style={{
                    width: "20px",
                    height: "20px",
                    flexShrink: 0,
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.49912 4.49913C4.77574 4.22251 5.22424 4.22251 5.50086 4.49913L9.99999 8.99826L14.4991 4.49913C14.7757 4.22251 15.2242 4.22251 15.5009 4.49913C15.7775 4.77575 15.7775 5.22424 15.5009 5.50087L11.0017 10L15.5009 14.4991C15.7775 14.7758 15.7775 15.2242 15.5009 15.5009C15.2242 15.7775 14.7757 15.7775 14.4991 15.5009L9.99999 11.0017L5.50086 15.5009C5.22424 15.7775 4.77574 15.7775 4.49912 15.5009C4.2225 15.2242 4.2225 14.7758 4.49912 14.4991L8.99826 10L4.49912 5.50086C4.2225 5.22424 4.2225 4.77575 4.49912 4.49913Z"
                        fill="#737373"
                    />
                </svg>
            </div>
        </div>
    )
}

export default CloseIcon
