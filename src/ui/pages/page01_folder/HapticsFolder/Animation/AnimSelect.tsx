import React, { useEffect, useState, useRef } from "react"
import Selection from './Selection';
import Selection_05 from './Selection_05';
import Success from './Success';
import Error from './Error';

interface SampleProps {
    haptics?: any;
}

const AnimSelect: React.FC<SampleProps> = ({ haptics }) => {

    return (
        <div style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "#fff",
            // backgroundColor: "rgba(255, 0, 0, 0.5)",
            display: "flex"}}>
                {haptics === "Selection" && <Selection />}
                {haptics === "Selection - 0.5" && <Selection_05 />}
                {haptics === "Success" && <Success />}
                {haptics === "Error" && <Error />}
        </div>
    );
}
export default AnimSelect;



