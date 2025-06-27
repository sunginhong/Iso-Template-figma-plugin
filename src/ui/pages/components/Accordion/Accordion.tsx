import React, { useEffect, useState } from "react"
import AccordionItem from "./Items/AccordionItem"

interface AccordionProps {
}

const Accordion: React.FC<AccordionProps> = ({ }) => {
    const item = [0, 1, 2, 3]
    const [clickItems, setClickItems] = useState<number>(-1);

    const handleValueChange = (value: number) => {
        setClickItems(value);
    };

    useEffect(() => {
    }, [])

    return (
        <div className="row">
            { item.map((item, index) => (
            <AccordionItem 
                key={index} 
                index={index} 
                onValueChange={() => handleValueChange(index === clickItems ? -1 : index)} 
                openState={index === clickItems ? "open" : "closed"}
            />
            ))}
        </div>
    )
}

export default Accordion;