import React from 'react';
import EasingListContain from './EaseFolder/EasingListContain';
import EaseAnswerContain from './EaseFolder/EaseAnswerContain';
import EasingListSelProps from './EasingListSelProps';

interface EasingListProps {
    curve?: string;
}

const EasingList: React.FC<EasingListProps> = ({ curve  }) => {
    const [name, values, color] = EasingListSelProps(curve);

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
                width: "810px",
                alignItems: "flex-start",
                gap: "24px"
            }}>
                <EasingListContain title={name} curve={values} color={color} />
                <EaseAnswerContain curve={curve} />
            </div>
        </div>
    );
}

export default EasingList;
