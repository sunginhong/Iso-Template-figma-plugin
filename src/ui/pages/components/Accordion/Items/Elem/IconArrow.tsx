import React, { useEffect, useState } from "react"

interface IconArrowProps {
}

const IconArrow: React.FC<IconArrowProps> = ({ }) => {

    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Icon Open">
                <path id="Outline" fill-rule="evenodd" clip-rule="evenodd" d="M8 10.9C7.84971 10.9 7.70558 10.8403 7.59931 10.7341L2.93264 6.06738C2.71135 5.84609 2.71135 5.48729 2.93264 5.266C3.15394 5.0447 3.51273 5.0447 3.73403 5.266L8 9.53197L12.266 5.266C12.4873 5.0447 12.8461 5.0447 13.0674 5.266C13.2887 5.4873 13.2887 5.84609 13.0674 6.06739L8.4007 10.7341C8.29443 10.8403 8.15029 10.9 8 10.9Z" fill="black"/>
            </g>
        </svg>
    )
}

export default IconArrow;