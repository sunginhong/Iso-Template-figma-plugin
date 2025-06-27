import React from 'react';
import EaseCanvas from './EaseCanvas';
import EaseTitle from './EaseTitle';

interface EasingContainProps {
    title?: string;
    curve?: any;
    color?: string;
}

const EasingContain: React.FC<EasingContainProps> = ({ title ,curve, color }) => {

    return (
        <div style={{
            display: "flex",
            width: "186px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "8px",
            flexShrink: 0
        }}>
            <EaseTitle title={title} color={color} />
            <EaseCanvas curve={curve} color={color} selector={true} />
        </div>
    );
}
export default EasingContain;