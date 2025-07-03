import React, { useRef, useState, useEffect } from "react"
import "./styles/styles.css"
import PlaceHolderType1 from "../components/PlaceHolder/Type1/PlaceHolderType1"
import PlaceHolderType2 from "../components/PlaceHolder/Type2/PlaceHolderType2"
import PlaceHolderType3 from "../components/PlaceHolder/Type3/PlaceHolderType3"
import GuideForm from "../components/Ui/GuideForm"
import { PlaceHolderLoading_A, PlaceHolderComplete_A, PlaceHolderLoading_B, PlaceHolderComplete_B, PlaceHolderLoading_C, PlaceHolderComplete_C } from "./data/PlaceHolder"
import CountDown_Contain_Guide_re from "../components/00Common/CountDown/elem/CountDown_Contain_Guide_re"

export default function PlaceHolderPage() {
    const previewRef = useRef<HTMLDivElement>(null)
    const [previewSize, setPreviewSize] = useState<{
        width: number
        height: number
    }>({ width: 0, height: 0 })
    const padding = 32
    const [previewPadding, setPreviewPadding] = React.useState(padding)
    const [selectedTab, setSelectedTab] = React.useState(0)
    let startTime = 100
    let completeTime = 15

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
                    <h1 className="title">Skeleton</h1>
                </div>
                <div
                    className="tabs"
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 8,
                    }}
                >
                    {["Type A", "Type B", "Type C"].map((type, idx) => (
                        <div
                            style={{
                                width: "128px",
                                height: "32px",
                                flexShrink: 0,
                                color:
                                    selectedTab === idx ? "#03A94D" : "#737373",
                                backgroundColor:
                                    selectedTab === idx
                                        ? "#F7F7F7"
                                        : "transparent",
                                fontFamily: "Pretendard Variable",
                                fontSize: "14px",
                                fontStyle: "normal",
                                fontWeight: 600,
                                lineHeight: "28px",
                                fontFeatureSettings: "'liga' off, 'clig' off",
                                paddingLeft: "9px",
                                cursor: "pointer",
                                borderTop:
                                    selectedTab === idx
                                        ? "2px solid #03A94D"
                                        : "2px solid #737373",
                            }}
                            key={type}
                            className={
                                selectedTab === idx ? "tab active" : "tab"
                            }
                            onClick={() => setSelectedTab(idx)}
                        >
                            {type}
                        </div>
                    ))}
                </div>
                <div className="conents">
                    <h1 className="conents_title">Preview</h1>
                    <div
                        key={selectedTab}
                        ref={previewRef}
                        className="preview"
                        style={{
                            display: "flex",
                            // height: "280px",
                            padding: "0px 130px",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "40px",
                            alignSelf: "stretch",
                            borderRadius: "8px",
                            backgroundColor: "#F7F7F7",
                        }}
                    >
                        {selectedTab === 0 && (
                            <>
                                <PlaceHolderType1
                                    previewSize={previewSize}
                                    startTime={startTime}
                                    completeTime={completeTime}
                                />
                            </>
                        )}
                        {selectedTab === 1 && (
                            <>
                                <PlaceHolderType2
                                    previewSize={previewSize}
                                    startTime={startTime}
                                    completeTime={completeTime}
                                />
                            </>
                        )}
                         {selectedTab === 2 && (
                            <>
                                <PlaceHolderType3
                                    previewSize={previewSize}
                                    startTime={startTime}
                                    completeTime={completeTime}
                                />
                            </>
                        )}
                        <div
                            style={{
                                position: "absolute",
                                width: previewSize.width + "px",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <div
                                style={{
                                    marginLeft: "12px",
                                    marginTop: "10px",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    gap: 4,
                                }}
                            >
                                <p
                                    style={{
                                        fontSize: "16px",
                                        fontWeight: "400",
                                    }}
                                >
                                    LoadingTime:
                                </p>
                                <CountDown_Contain_Guide_re
                                    timeHour={null}
                                    timeMinute={null}
                                    timeSecond={completeTime}
                                    fontColor={"#000"}
                                    fontFamily={"Pretendard"}
                                    fontSize={16 * 2}
                                    fontWeight={700}
                                    masking={true}
                                    animStartTimer={startTime}
                                    animDelay={0.1}
                                    animDuration={0.5}
                                    animCurve={"standard"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="conents"  key={selectedTab}>
                    <h1 className="conents_title">Guide</h1>
                    <GuideForm
                        previewSize={previewSize}
                        previewPadding={previewPadding}
                        caseTitle={"Loading"}
                        dataSet={
                            selectedTab === 0
                                ? PlaceHolderLoading_A
                                : selectedTab === 1
                                  ? PlaceHolderLoading_B
                                  : selectedTab === 2
                                    ? PlaceHolderLoading_C
                                    : undefined
                        }
                        guide={true}
                        timeline={true}
                    />
                    <GuideForm
                        previewSize={previewSize}
                        previewPadding={previewPadding}
                        caseTitle={"Complete"}
                        dataSet={
                            selectedTab === 0
                                ? PlaceHolderComplete_A
                                : selectedTab === 1
                                  ? PlaceHolderComplete_B
                                  : selectedTab === 2
                                    ? PlaceHolderComplete_C
                                    : undefined
                        }
                        guide={true}
                        timeline={true}
                    />
                </div>
            </div>
        </div>
    )
}
