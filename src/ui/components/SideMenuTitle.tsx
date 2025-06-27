import React from "react";

interface IButtonProps {
    title?: React.ReactNode;
    selected?: boolean;
    sideSubSelected?: boolean;
    underline?: boolean;
}

const SideMenuTitle: React.FC<IButtonProps> = ({ title, selected, sideSubSelected, underline }) => {
    return (
            <a style={{
                position: 'relative', 
                color: !sideSubSelected? selected ? "#00FFA3" : "#fff": "#fff",
                fontWeight: 400,
                fontSize: 16, 
                fontFamily: 'NanumSquare Neo', 
                wordWrap: 'break-word', 
                textDecorationLine: underline ? "underline" : "none",
                textDecorationStyle: "solid",
                textDecorationSkipInk: "auto",
                textDecorationThickness: "auto",
                textUnderlineOffset: "auto",
                textUnderlinePosition: "from-font",
                cursor: 'pointer',
            }}>{title}</a>
    );
};

export default SideMenuTitle;

