import React from "react";
import SideMenuTitle from './SideMenuTitle';

interface IButtonProps {
    title?: React.ReactNode;
    props?: any;
    selected?: boolean;
    sideSubSelected?: boolean;
    onClick?: any;
}

const SideMenuItem: React.FC<IButtonProps> = ({ onClick, title, selected, sideSubSelected, ...props }) => {
    return (
        <div {...props} 
            style={{
                justifyContent: 'center', 
                alignItems: 'center', 
                gap: 10, 
                display: 'inline-flex'  
            }}
            onClick={onClick}
            >
                <SideMenuTitle title={title} selected={selected} sideSubSelected={sideSubSelected} underline={false}/>
        </div>
    );
};

export default SideMenuItem;

