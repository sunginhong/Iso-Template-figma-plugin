import React, { useRef, useState, useEffect } from "react"
import "./styles/styles.css"
import Popover from "../components/Popover/Popover"
import GuideForm from "../components/Ui/GuideForm"
import { PopOverEntry, PopOverExit } from "./data/PopOver"

export default function PopOverPage() {
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
                            padding: "0px 130px",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "40px",
                            alignSelf: "stretch",
                            borderRadius: "8px",
                            backgroundColor: "#F7F7F7",
                        }}
                    >
                        <Popover previewSize={previewSize} />
                    </div>
                </div>
                <div className="conents">
                    <h1 className="conents_title">Guide</h1>
                    <GuideForm
                        previewSize={previewSize}
                        previewPadding={previewPadding}
                        caseTitle={"Entry"}
                        dataSet={PopOverEntry}
                        guide={true}
                        timeline={true}
                    />
                    <GuideForm
                        previewSize={previewSize}
                        previewPadding={previewPadding}
                        caseTitle={"Exit"}
                        dataSet={PopOverExit}
                        guide={true}
                        timeline={true}
                    />
                </div>
            </div>
        </div>
    )
}
