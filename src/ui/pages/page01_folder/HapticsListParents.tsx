import React, { MouseEvent, useState } from 'react';
import HapticsList from './HapticsList';

interface HapticsListParentsProps {
    haptics?: React.ReactNode;
    color?: string;
}

const HapticsListParents: React.FC<HapticsListParentsProps> = ({ haptics }) => {
    const HapticsTitle = ["Selection", "Selection - 0.5", "Success", "Error"];
    return (
        <>
            {HapticsTitle.map((title, index) => (
                <HapticsList key={index} haptics={title} />
            ))}
            <div style={{height: "50px"}}></div>
        </>
    );
}
export default HapticsListParents;