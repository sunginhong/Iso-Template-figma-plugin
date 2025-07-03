import React, { useState, useEffect, useRef } from "react"
import RowItem from "./RowItem"

interface props {
    key?: number
    loaingIs?: boolean
    loadingComplete?: boolean
}

const RowItemList: React.FC<props> = ({ key, loaingIs, loadingComplete }) => {
    return (
        <div
            key={key}
            className="row_item_list"
            style={{
                display: "flex",
                width: "318px",
                height: "18px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
                flexShrink: 0,
                backgroundColor: "#fff"
            }}
        >
            <RowItem key={key} loaingIs={loaingIs} loadingComplete={loadingComplete} />
        </div>
    )
}

export default RowItemList
