import React, { useRef, useState, useEffect } from "react"
import "./styles/styles.css"
import Tab from "../components/Tab/Tab"

export default function TabPage() {
    const previewRef = React.useRef<HTMLDivElement>(null)
    const [previewSize, setPreviewSize] = React.useState<{
        width: number
        height: number
    }>({ width: 0, height: 0 })
    const padding = 32
    const [previewPadding, setPreviewPadding] = React.useState(padding)


    useEffect(() => {
        if (previewRef.current) {
            const { width, height } = previewRef.current.getBoundingClientRect()
            setPreviewSize({ width, height });
        }
    }, [])

    return (
        <div className="resources" style={{ padding: 50 }}>
            <div className="comp_guide">
                <div className="main_title_contain">
                    <h1 className="title">Popup</h1>
                </div>
                <div className="conents">
                    <h1 className="conents_title">Preview</h1>
                    <div
                        ref={previewRef}
                        className="preview"
                        style={{
                            display: "flex",
                            height: "280px",
                            padding: "0px 130px",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "40px",
                            alignSelf: "stretch",
                            borderRadius: "8px",
                            backgroundColor: "#F7F7F7",
                        }}
                    >
                         <Tab previewSize={previewSize} />
                    </div>
                </div>
            
            </div>
        </div>
    )
}
