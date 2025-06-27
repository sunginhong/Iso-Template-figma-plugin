import React from 'react';
import HapticsListContain from './HapticsFolder/HapticsListContain';
import HapticsAnswerContain from './HapticsFolder/HapticsAnswerContain';
import HapticsListSelProps from './HapticsListSelProps';
import HapticsCanvas from './HapticsFolder/HapticsCanvas';

interface HapticsListProps {
    haptics?: string;
}

const HapticsList: React.FC<HapticsListProps> = ({ haptics }) => {
    const [name, memoLine1, memoLine2, color] = HapticsListSelProps(haptics);

    return (
        <div style={{
            display: "flex",
            width: "892px",
            padding: "28px 32px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "48px",
            borderRadius: "8px",
            background: "#F7F7F7"
        }}>
            <div style={{
                display: "flex",
                width: "100%",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: "24px"
            }}>
                <HapticsListContain title={name} memoLine1={memoLine1} memoLine2={memoLine2} color={color} />
                <HapticsCanvas title={haptics} color={color} selector={true} />
            </div>
            <HapticsAnswerContain haptics={haptics} />
        </div>
    );
}

export default HapticsList;
