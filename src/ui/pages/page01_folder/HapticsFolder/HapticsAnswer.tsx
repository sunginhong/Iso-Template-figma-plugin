import React, { useEffect, useState } from "react"

interface HapticsAnswerProps {
    haptics?: any
}

const HapticsAnswer: React.FC<HapticsAnswerProps> = ({ haptics }) => {
    const [hover, setHover] = useState(false)

    const fnHapticCopy = async (text: string) => {
        // try {
        //     await navigator.clipboard.writeText(haptics)
        //     alert("클립보드에 복사되었습니다.")
        // } catch (error) {
        //     alert("클립보드에 복사하지 못하였습니다.")
        // }
        try {
            await navigator.clipboard.writeText(text)
        } catch (error) {}
        alert("아래 내용을 복사하여 사용해 주세요.\n\n" + text + "\n")
    }

    const btnClick = (e) => {
        fnHapticCopy(haptics)
    }

    useEffect(() => {}, [])

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
            }}
        >
            <div
                style={{
                    display: "flex",
                    padding: "2px 8px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    borderRadius: "2px",
                    border: "1px dashed #B8B8B8",
                    background: "#E5E5E5",
                }}
            >
                <div
                    style={{
                        display: "inline-block",
                        fontFeatureSettings: "'clig' off, 'liga' off",
                        color: "#6A7078",
                        fontFamily: "Pretendard",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontStretch: "normal",
                        fontWeight: "400",
                        lineHeight: "180%",
                    }}
                >
                    {haptics}
                </div>
            </div>
            <button
                style={{
                    display: "flex",
                    padding: "2px",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "29px",
                    gap: "4px",
                    borderRadius: "2px",
                    paddingRight: "4px",
                    backgroundColor: hover
                        ? "rgba(0,0,0,0.1)"
                        : "rgba(0,0,0,0.0)",
                    border: "0",
                    cursor: "pointer",
                    transition: "all 300ms cubic-bezier(0.15, 0, 0.15, 1)",
                }}
                onClick={btnClick}
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}
            >
                <p
                    style={{
                        color: "#737373",
                        fontFeatureSettings: "'clig' off, 'liga' off",
                        fontFamily: "Pretendard",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "180%",
                    }}
                ></p>
                <div
                    style={{
                        width: "12px",
                        height: "15px",
                        filter: hover ? "brightness(0.9)" : "brightness(1)",
                        transition: "all 300ms cubic-bezier(0.15, 0, 0.15, 1)",
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="15"
                        viewBox="0 0 12 15"
                        fill="none"
                    >
                        <rect
                            x="0.5"
                            y="0.5"
                            width="9"
                            height="11"
                            rx="1.5"
                            fill="#F7F7F7"
                            stroke="#737373"
                        />
                        <rect
                            x="2.5"
                            y="3.5"
                            width="9"
                            height="11"
                            rx="1.5"
                            fill="#F7F7F7"
                            stroke="#737373"
                        />
                    </svg>
                </div>
            </button>
        </div>
    )
}

export default HapticsAnswer
