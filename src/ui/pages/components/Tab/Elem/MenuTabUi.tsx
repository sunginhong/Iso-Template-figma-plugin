import React, { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import MenuTabHeader from "./MenuTabHeader"

interface props {
    MenuTabData?: any
    currentIdx?: number
    tabLabels?: any
    onChangeIdx?: (value: boolean) => void
    duration?: number
}

const MenuTabUi: React.FC<props> = ({
    MenuTabData,
    currentIdx,
    tabLabels,
    onChangeIdx,
    duration,
}) => {
    const [scrollX, setScrollX] = useState(0)

    const handleChildIdx = (newValue) => {
        onChangeIdx(newValue)
    }

    return (
        <div>
            <MenuTabHeader
                currentIdx={currentIdx}
                tabLabels={tabLabels}
                onChangeIdx={handleChildIdx}
                duration={duration}
                scrollX={scrollX}
            />
        </div>
    )
}
export default MenuTabUi
