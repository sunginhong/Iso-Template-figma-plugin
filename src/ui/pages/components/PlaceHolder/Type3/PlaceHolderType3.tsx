import React, { useEffect, useState } from "react"
import PlaceHolderItem from "./Elem/PlaceHolderItem"

interface AccordionProps {
    previewSize?: { width: number; height: number }
    startTime?: number
    completeTime?: number
}

const PlaceHolderType3: React.FC<AccordionProps> = ({ previewSize, startTime, completeTime }) => {
    const [lodingIs, setLodingIs] = useState<boolean>(false)
    const [loadingComplete, setLoadingComplete] = useState<boolean>(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLodingIs(true)
        }, startTime)

        const timer2 = setTimeout(() => {
            setLoadingComplete(true)
        }, completeTime * 1000)

        return () => {
            clearTimeout(timer)
            clearTimeout(timer2)
        }
    }, [])

    useEffect(() => {}, [])

    return (
        <div
            className="row"
            style={{
            width: previewSize?.width + "px",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            }}
        >
            <PlaceHolderItem
            lodingIs={lodingIs}
            loadingComplete={loadingComplete}
            />
        </div>
    )
}

export default PlaceHolderType3
