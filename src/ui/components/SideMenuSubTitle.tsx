import React from "react";

interface IButtonProps {
    title?: React.ReactNode;
    selected?: boolean;
    underline?: boolean;
}

const SideMenuSubTitle: React.FC<IButtonProps> = ({ title, selected, underline }) => {
    return (
            <a style={{
                position: 'relative', 
                color: selected ? "#00FFA3" : "#fff",
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

export default SideMenuSubTitle;

