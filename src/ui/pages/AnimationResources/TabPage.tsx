import React, { useRef, useState, useEffect } from "react"
import "./styles/styles.css"
import Tab from "../components/Tab/Tab"
import GuideForm from "../components/Ui/GuideForm"
import { TabAnchoring } from "./data/Tab"
import TabImg0 from "./GuideImages/Tab/TabImg0"
import TabImg1 from "./GuideImages/Tab/TabImg1"

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
            setPreviewSize({ width, height })
        }
    }, [])

    return (
        <div className="resources" style={{ padding: 50 }}>
            <div className="comp_guide">
                <div className="main_title_contain">
                    <h1 className="title">Tab</h1>
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
                <div className="conents" style={{ gap: "0px" }}>
                    <h1 className="conents_title">Guide</h1>
                    <GuideForm
                        previewSize={previewSize}
                        previewPadding={previewPadding}
                        caseTitle={"Anchoring"}
                        dataSet={TabAnchoring}
                        guide={false}
                        timeline={false}
                        bgArr={{ borderRadius: 0 }}
                    />

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "24px",
                            backgroundColor: "rgb(247, 247, 247)",
                        }}
                    >
                        <div
                            style={{
                                paddingTop: "50px",
                                width: "730px",
                                minWidth: "540px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <TabImg0 />
                        </div>
                        <GuideForm
                            previewSize={previewSize}
                            previewPadding={previewPadding}
                            dataSet={TabAnchoring}
                            guide={true}
                            timeline={false}
                            bgArr={{ borderRadius: 0 }}
                        />

                        <div
                            style={{
                                borderRadius: "10px",
                                border: "1px solid rgba(0, 0, 0, 0.20)",
                                padding: "50px 0px",
                                width: "730px",
                                minWidth: "540px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <TabImg1 />
                        </div>
                        <GuideForm
                            previewSize={previewSize}
                            previewPadding={previewPadding}
                            dataSet={TabAnchoring}
                            guide={false}
                            timeline={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
