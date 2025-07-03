import React, { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import MenuTabComp from "./MenuTabComp"

interface props {
    currentIdx?: number
    tabLabels?: any
    onChangeIdx?: (value: boolean) => void
    duration?: number
    scrollX?: number
}

const MenuTabHeader: React.FC<props> = ({
    currentIdx,
    tabLabels,
    onChangeIdx,
    duration,
    scrollX,
}) => {
    const handleChildIdx = (newValue) => {
        onChangeIdx(newValue)
    }

    return (
        <div
            style={{
                width: "393px",
                height: "54px",
                backgroundColor: "#fff",
            }}
        >
            <MenuTabComp
                currentIdx={currentIdx}
                tabLabels={tabLabels}
                onChangeIdx={handleChildIdx}
                MenuTabHeader={MenuTabHeader}
                duration={duration}
                scrollX={scrollX}
            />
        </div>
    )
}

export default MenuTabHeader
