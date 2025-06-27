import React, { useState, useEffect, useRef } from "react"

import RowContent from "./Common/RowContent"
import LineRow from "./Common/LineRow"
import Line from "./Common/Line"
import Frame0Label from "./0Label/Frame0Label"
import Frame1Action from "./1Action/Frame1Action"
import Frame2Props from "./2Props/Frame2Props"
import { u } from "framer-motion/dist/types.d-CQt5spQA"

interface props {data, previewSize?: any}

const GuideTable: React.FC<props> = ({data, previewSize}) => {
    const [tableWidth, setTableWidth] = useState<number>(0)
    const tableRef = useRef<HTMLDivElement>(null)   

    useEffect(() => {
        if (tableRef.current) {
            setTimeout(() => {
                setTableWidth(tableRef.current?.offsetWidth || 0);
            }, 0);
        }
    }, []); 
    // const tableWidth = 540
    const guideTableStyles: React.CSSProperties = {
        display: "flex",
        minWidth: "540px",
        // width: "100%",
        flexDirection: "column",
        alignItems: "flex-start",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "inset 0 0 0 1px var(--Color-Neutral-Gray-600, #C9C9C9)",
        // border: "1px solid var(--Color-Neutral-Gray-600, #C9C9C9)",
        background: "var(--Color-Neutral-Gray-0, #FFF)",
    }

    const lineStyle: React.CSSProperties = {
        alignSelf: "stretch",
        background: "var(--Color-Neutral-Gray-500, #D9D9D9)",
        height: "100%",
        width: "1px",
    }

    return (
        <div ref={tableRef} className="guideTable" style={{...guideTableStyles, width: "100%",}} >
            <RowContent tableWidth={tableWidth} previewSize={previewSize}/>
            <LineRow tableWidth={tableWidth} previewSize={previewSize}/>
            {data.map((item, index) => (
                <div
                    key={index}
                    style={{
                        // width: previewSize?.width + "px",
                         width: "100%",
                        flexDirection: "row",
                        display: "flex",
                        borderBottom:
                            index === data.length - 1
                                ? null
                                : "1px solid var(--Color-Neutral-Gray-500, #F0F0F0)",
                    }}
                >
                    <Frame0Label title={item.labels} />
                    <Frame1Action action={item.actions} />
                    <Frame2Props props={item.props} />
                </div>
            ))}
        </div>
    )
}

export default GuideTable
