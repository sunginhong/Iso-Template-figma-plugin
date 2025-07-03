import React, { useRef, useState, useEffect } from "react"
import "./styles/styles.css"
import FocusBubble from "../components/FocusBubble/FocusBubble"
import GuideForm from "../components/Ui/GuideForm"
import { FocusBubbleEntry, FocusBubbleExit } from "./data/FocusBubble"
import FocusBubbleGuide from "./GuideImages/FocusBubble/FocusBubbleGuide"

export default function FocusBubblePage() {
    const previewRef = useRef<HTMLDivElement>(null)
    const [previewSize, setPreviewSize] = useState<{
        width: number
        height: number
    }>({ width: 0, height: 0 })
    const padding = 32
    const [previewPadding, setPreviewPadding] = React.useState(padding)

    React.useEffect(() => {
        if (previewRef.current) {
            const { width, height } = previewRef.current.getBoundingClientRect()
            setPreviewSize({ width, height })
        }
    }, [])
    useEffect(() => {
        if (previewRef.current) {
            const { width, height } = previewRef.current.getBoundingClientRect()
            setPreviewSize({ width, height })
        }
    }, [])

    return (
        <div className="resources" style={{ padding: 50 }}>
            <div className="comp_guide">
                <div className="main_title_contain">
                    <h1 className="title">PopOver</h1>
                </div>
                <div className="conents">
                    <h1 className="conents_title">Preview</h1>
                    <div
                        ref={previewRef}
                        className="preview"
                        style={{
                            display: "flex",
                            height: "280px",
                            width: "1054px",
                            padding: "32px 0px",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "40px",
                            alignSelf: "stretch",
                            borderRadius: "8px",
                            backgroundColor: "#F7F7F7",
                        }}
                    >
                        <FocusBubble previewSize={previewSize} />
                    </div>
                </div>
                <div className="conents" style={{ gap: "0px" }}>
                   <FocusBubbleGuide/>
                </div>
            </div>
        </div>
    )
}