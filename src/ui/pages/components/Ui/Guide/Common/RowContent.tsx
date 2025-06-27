import React, { useEffect, useState } from "react"
import Content from "./Content";
import Line from "./Line";

interface Props {tableWidth?: number, previewSize?: { width: number; height: number } }

const RowContent: React.FC<Props> = (tableWidth, previewSize) => {
    const RowContentRef = React.useRef<HTMLDivElement>(null);
    const [rowHeight, setRowHeight] = useState<number>(0);
    const [tableWidthF, setTableWidthF] = useState<number>(tableWidth.tableWidth || 0);
    useEffect(() => {
        if (RowContentRef.current) {
            const height = RowContentRef.current.offsetHeight;
            setRowHeight(height);
        }
    }, []);

    useEffect(() => {
        setTableWidthF(tableWidth.tableWidth)
    }, [tableWidth.tableWidth]);

    return (
        <div
            ref={RowContentRef}
            style={{
                display: "flex",
                width: "100%",
                // width: previewSize.width + "px",
                alignItems: "flex-start",
                backgroundColor: "#E5E5E5",
            }}
        >
            <Content title="Label" />
            <Line rowHeight={rowHeight}/>
            <Content title="Action" />
            <Line rowHeight={rowHeight}/>
            <Content title="Property" />
        </div>
    );
};

export default RowContent;
