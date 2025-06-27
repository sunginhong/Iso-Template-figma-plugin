import React from 'react';
import HapticsTitle from './HapticsTitle';

interface EasingContainProps {
    title?: string;
    memoLine1?: string;
    memoLine2?: string;
    color?: string;
}

const HapticsListContain: React.FC<EasingContainProps> = ({ title ,memoLine1, memoLine2, color }) => {

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "8px",
            flexShrink: 0
        }}>
            <HapticsTitle title={title} memoLine1={memoLine1} memoLine2={memoLine2} color={color} />
        </div>
    );
}
export default HapticsListContain;