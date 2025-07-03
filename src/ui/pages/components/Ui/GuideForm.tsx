import React, { useState, useEffect, useRef } from "react"
import GuideTable from "./Guide/GuideTable"
import GuideTimeline from "./Timeline/GuideTimeline"
interface props {
    previewSize?: any
    previewPadding?: number
    caseTitle?: string
    dataSet: any[]
    guide?: boolean
    timeline?: boolean
    bgArr?: {bgColor?: string, borderRadius?: number}
}

const caseTitleStyle: React.CSSProperties = {
    color: "#03A94D",
    fontFamily: "SF Pro Display",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
}

const GuideForm: React.FC<props> = ({
    previewSize,
    previewPadding,
    caseTitle,
    dataSet,
    guide,
    timeline,
    bgArr = { bgColor: "#F7F7F7", borderRadius: 8 },
}) => {
    return (
        <div
            className="guide_form"
            style={{
                width: previewSize?.width,
                // width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "16px",
                paddingTop: "16px",
                paddingBottom: timeline ? "16px" : "0px",
            }}
        >
            {(caseTitle && guide || caseTitle && !guide && !timeline) ? <div
                className="case_title"
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    // width: "100%",
                    gap: "6px",
                }}
            >
                <div style={caseTitleStyle}>I</div>
                <div style={caseTitleStyle}>{caseTitle}</div>
            </div> : null}
            
            <div
                className="guide_contents"
                style={{
                    display: "flex",
                    // padding: "36px 24px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    width: "100%",
                    gap: 24,
                    borderRadius: !bgArr?.borderRadius ? "0px" : bgArr?.borderRadius + "px",
                    background: !bgArr?.bgColor ? "#F7F7F7" : bgArr?.bgColor,
                }}
            >
                <div
                    style={{
                        width: previewSize?.width - previewPadding*2 ,
                        display: "flex",
                        padding: "36px 24px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: 24,
                    }}
                >
                    {guide && <GuideTable data={dataSet} previewSize={previewSize}/>}
                    {guide && timeline ? <div
                            style={{
                                width: "100%",
                                height: 1,
                                backgroundColor: "rgba(0,0,0,0.2)",
                            }}
                    /> : null}
                    {timeline && <GuideTimeline data={dataSet} previewSize={previewSize}/>}
                </div>
            </div>
        </div>
    )
}

export default GuideForm
