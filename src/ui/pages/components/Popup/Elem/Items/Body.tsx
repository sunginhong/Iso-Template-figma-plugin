import React from "react"

interface props {}

const Body: React.FC<props> = ({}) => {
    return (
        <div
            className="body"
            style={{
                display: "flex",
                width: "202px",
                height: "169.594px",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
            }}
        >
            <div
                style={{
                    display: "flex",
                    width: "181.925px",
                    height:  "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: 0,
                    backgroundColor: "#F0F0F0",
                }}
            >
                <span
                    style={{
                        color: "rgba(0, 0, 0, 0.40)",
                        textAlign: "center",
                        fontFamily: "Pretendard",
                        fontSize: "9.894px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "150%",
                        letterSpacing: "-0.198px",
                    }}
                >
                    Contents Area
                </span>
            </div>
        </div>
    )
}

export default Body
