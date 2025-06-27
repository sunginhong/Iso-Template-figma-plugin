import React, { useState, useEffect, useRef } from "react"
import Label from "./Elems/Label"

interface props {
    idxOrder?: any
    action?: any
}

const Frame1Action: React.FC<props> = ({ idxOrder, action }) => {
    return (
        <div
            style={{
                width: "120px",
                paddingTop: idxOrder[0] === 0 ? "10px" : "4px",
                paddingBottom: idxOrder[0] === idxOrder[1] ? "20px" : "4px",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "start",
                    height: "100%",
                    gap: "4px",
                }}
            >
                {Array.isArray(action) &&
                    action.map((prop: any, index: number) => (
                        <div className="action_item" key={index}>
                            <Label title={prop} />
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Frame1Action
