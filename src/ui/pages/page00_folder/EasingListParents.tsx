import React, { MouseEvent, useState } from 'react';
import EasingList from './EasingList';

interface EasingListParentsProps {
    easing?: React.ReactNode;
    color?: string;
}

const EasingListParents: React.FC<EasingListParentsProps> = ({ easing }) => {
    const easingTitle = ["ease_Standard", "ease_Out", "ease_Out_Level_1", "ease_In", "ease_InOut", "ease_Spring", "ease_Spring_Level_1", "ease_Spring_Level_2"];
    return (
        <>
            {easingTitle.map((title, index) => (
                <EasingList key={index} curve={title} />
            ))}
            <div style={{height: "50px"}}></div>
        </>
    );
}
export default EasingListParents;