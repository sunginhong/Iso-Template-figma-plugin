import React, { useState, useEffect, useRef } from "react"
import Label from "./Elems/Label"

interface props {
    action?: any
}

const Frame1Action: React.FC<props> = ({ action }) => {
    return (
        <div
            style={{
                minWidth: "120px",
                width: "20%",
                borderRight: "1px solid #F0F0F0",
                paddingTop: "20px",
                paddingBottom: "20px",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
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
