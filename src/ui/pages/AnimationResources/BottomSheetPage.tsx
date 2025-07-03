import React, { useEffect } from "react"
import "./styles/styles.css"
import BottomSheet from "../components/BottomSheet/BottomSheet"
import GuideForm from "../components/Ui/GuideForm"
import { BottomSheetEntry, BottomSheetExit } from "./data/BottomSheet"
import BottomSheetGuide from "./GuideImages/BottomSheet/BottomSheetGuide"

export default function BottomSheetPage() {
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
                    <h1 className="title">Accordion</h1>
                </div>
                <div className="conents">
                    <h1 className="conents_title">Preview</h1>
                    <div
                        ref={previewRef}
                        className="preview"
                        style={{
                            display: "flex",
                            width: "1054px",
                            paddingTop: padding + "px",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "40px",
                            alignSelf: "stretch",
                            borderRadius: "8px",
                            backgroundColor: "#F7F7F7",
                        }}
                    >
                        <BottomSheet
                            previewSize={previewSize}
                            padding={padding}
                        />
                    </div>
                </div>
                <div className="conents" style={{ gap: "0px" }}>
                   <BottomSheetGuide/>
                </div>
            </div>
        </div>
    )
}
