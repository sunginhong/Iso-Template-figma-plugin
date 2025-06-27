import React from "react";
import SideMenuSubTitle from './SideMenuSubTitle';

interface IButtonProps {
    title?: React.ReactNode;
    props?: any;
    selected?: boolean;
    onClick?: any;
}

const SideSubMenuItem: React.FC<IButtonProps> = ({ onClick, title, selected,...props }) => {
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
                <SideMenuSubTitle title={title} selected={selected} underline={false}/>
        </div>
    );
};

export default SideSubMenuItem;


