import React, { useRef } from "react"
import CloseIcon from "./CloseIcon"
import Title from "./Title"
import Contents from "./Contents"
interface Props {
    onChangeState: (value: boolean) => void
}

const Elem: React.FC<Props> = ({ onChangeState }) => {
    const popOverRef = useRef<HTMLDivElement>(null)

    const handleChildValue = (newValue) => {
        onChangeState(newValue)
    }

    return (
        <div
            ref={popOverRef}
            className="contents"
            style={{
                display: "flex",
                width: "200px",
                marginTop: "8px",
                padding: "12px",
                justifyContent: "space-between",
                alignItems: "center",
                alignContent: "center",
                rowGap: "12px",
                flexShrink: 0,
                flexWrap: "wrap",
                borderRadius: "8px",
                backgroundColor: "#FFF",
                boxShadow:
                    "0px 0px 1px 0px rgba(0, 0, 0, 0.10), 0px 0px 4px 1px rgba(0, 0, 0, 0.10)",
                position: "relative",
            }}
        >
            <Title />
            <Contents />

            <div
                style={{
                    width: "12px",
                    height: "8px",
                    position: "absolute",
                    top: "-8px",
                    left: "50%",
                    transform: "translateX(-50%)",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: "0px",
                        width: "12px",
                        height: "8px",
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                    >
                        <path
                            d="M0 8H12L6.65118 0.31044C6.36326 -0.10348 5.63674 -0.10348 5.34882 0.31044L0 8Z"
                            fill="white"
                        />
                    </svg>
                </div>
            </div>
            <CloseIcon onChangeState={handleChildValue} />
        </div>
    )
}

export default Elem
