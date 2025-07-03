import React, { useState, useEffect, useRef } from "react"
import RowItemList from "./Item/RowItemList"

interface props {
    lodingIs?: boolean
    loadingComplete?: boolean
}

const PlaceHolderItem: React.FC<props> = ({ lodingIs, loadingComplete }) => {
    const lengthSize = 5

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 10,
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: "#fff"
            }}
        >
            {[...Array(lengthSize)].map((_, idx) => {
                const [delayedLoading, setDelayedLoading] = useState(false)
                useEffect(() => {
                    const timer = setTimeout(() => {
                        setDelayedLoading(lodingIs)
                    }, idx * 100)
                    return () => clearTimeout(timer)
                }, [lodingIs])
                return (
                    <RowItemList
                        key={idx}
                        loaingIs={delayedLoading}
                        loadingComplete={loadingComplete}
                    />
                )
            })}
        </div>
    )
}

export default PlaceHolderItem
