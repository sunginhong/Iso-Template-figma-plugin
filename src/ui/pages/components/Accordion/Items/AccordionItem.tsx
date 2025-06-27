import React, { useEffect, useState, useRef } from "react"
import IconArrow from "./Elem/IconArrow"

interface AccordionProps {
    index?: number;
    onValueChange: (value: number) => void;
    openState?: string;
}

const AccordionItem: React.FC<AccordionProps> = ({ index, onValueChange, openState }) => {
    const accordionRefs = useRef([])
    const [selIdx, setSelIdx] = useState<number>(-1);
    
    const handleChange = (index) => {
        onValueChange(index);
    }

    useEffect(() => {
    }, [])

    return (
        <div
            className={`accordion__item ${
                openState
            }`}
            key={index}
            ref={(el) => (accordionRefs.current[index] = el)}
            style={{
                display: "flex",
                width: "272px",
                position: "relative",
                flexDirection: "column",
                alignItems: "center",
                overflow: "hidden",
                marginBottom: 10 + "px",
                animationComposition: "add",
                borderRadius: 8 + "px",
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.10)",
                
            }}
            >
            <div
                className={`accordion__header`}
                style={{
                    display: "flex",
                    width: "100%",
                    height: 40 + "px",
                    animationComposition: "add",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: 8 + "px",
                    backgroundColor: "#FFF",
                    cursor: "pointer",
                }}
                onClick={() =>
                    handleChange(index)
                }
                >
                <div
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        left: 0,
                        top: 0,
                    }}></div>

                    <div
                        style={{
                            position: "absolute",
                            width: 40 + "px",
                            height: 40 + "px",
                            top: 0,
                            right: 0,
                            transform: openState === "open" ? "rotate(-180deg)" : "rotate(0deg)",
                            transition: "transform 400ms cubic-bezier(0.15, 0, 0.15, 1)",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                width: 16 + "px",
                                height:
                                16 + "px",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                            }}
                            ><IconArrow/></div>
                </div>
            </div>
            <div 
                style={{
                    display: "flex",
                    padding: openState === "open" ?  "8px" : 0,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    alignSelf: "stretch",
                    backgroundColor: "#FAFBFC",
                    transition: "padding 400ms cubic-bezier(0.15, 0, 0.15, 1)",
                }}>
                <div 
                    style={{
                        display: "flex",
                        height: openState === "open" ? "101px" : "0px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        alignSelf: "stretch",
                        borderRadius: "4px",
                        border: "1px dashed #55B83C",
                        backgroundColor:"rgba(3, 199, 90, 0.06)",
                        opacity: openState === "open" ? 1 : 0,
                        transition: openState === "open" ? "height 400ms cubic-bezier(0.15, 0, 0.15, 1), opacity 200ms cubic-bezier(0.15, 0, 0.15, 1) 200ms" : "height 400ms cubic-bezier(0.15, 0, 0.15, 1), opacity 200ms cubic-bezier(0.15, 0, 0.15, 1)",
                    }}>
                </div>
            </div>
        </div>
    )
}

export default AccordionItem;