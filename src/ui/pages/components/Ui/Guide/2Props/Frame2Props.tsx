import React from "react";
import Title from "./Elems/Title";
import PropsTitle from "./Elems/PropsTitle";

interface Frame2PropsProps {
    props?: { name: string; value: string }[];
}

const framePropsStyles: React.CSSProperties = {
    // display: "flex",
    minWidth: "300px",
    width: "60%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "4px",
    paddingTop: "10px",
    paddingBottom: "10px",
};

const propsItemStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "flex-start",
    flexShrink: 0,
};

const Frame2Props: React.FC<Frame2PropsProps> = ({ props = [] }) => (
    <div style={{...framePropsStyles}}>
        <div style={{padding: "20px"}}>
            {props.map((prop, index) => (
            <div className="props_item" key={index} style={propsItemStyle}>
                <Title title={prop.name} />
                <span style={{ width: "4px", display: "inline-block" }} />
                <PropsTitle title={prop.value} />
            </div>
        ))}
        </div>
    </div>
);

export default Frame2Props;