import React, { useEffect } from "react"
import "./styles/styles.css"
import Accordion from "../components/Accordion/Accordion"
import GuideForm from "../components/Ui/GuideForm"
import {AccordionDataOpen, AccordionDataFold} from "./data/Accordion"
import AccordionGuide from "./GuideImages/Accordion/AccordionGuide"

export default function AccordionPage() {
    const previewRef = React.useRef<HTMLDivElement>(null)
    const [previewSize, setPreviewSize] = React.useState<{
        width: number
        height: number
    }>({ width: 0, height: 0 })
    const [previewPadding, setPreviewPadding] = React.useState(0)


    useEffect(() => {
        if (previewRef.current) {
            const { width, height } = previewRef.current.getBoundingClientRect()
            setPreviewSize({ width, height });
            const paddingStr = previewRef.current.style.padding || "0px";
            const paddingNum = parseInt(paddingStr.split(" ")[0], 10) || 0;
            setPreviewPadding(paddingNum);
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
                            padding: "32px 0px",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 40,
                            alignSelf: "stretch",
                            borderRadius: 8,
                            backgroundColor: "#F7F7F7",
                        }}
                    >
                        <Accordion />
                    </div>
                </div>
                <div className="conents" style={{ gap: "0px" }}>
                   <AccordionGuide/>
                </div>
            </div>
        </div>
    )
}
