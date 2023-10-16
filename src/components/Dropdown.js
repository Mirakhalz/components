import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panels";

function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    //reference to div element
    const divEl = useRef();

    useEffect(() => {
        const handler = (event) => {
            //if no ref to the element return earlier
            if (!divEl.current){
                return;
            }
            //if element exists set component
            if (!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        //listener for click events from user
        document.addEventListener("click", handler, true);

        //cleanup function to stop watching for clicks
        return () => {
            document.removeEventListener("click", handler);
        };
    }, []);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        //close dropdown
        setIsOpen(false);

        //set selected option user clicks
        onChange(option);
    };

    const renderedOptions = options.map((option) => {
        return (
            <div
                className="hover:bg-sky-100 rounded cursor-pointer p-1"
                onClick={() => handleOptionClick(option)}
                key={option.value}
            >
                {option.value}
            </div>
        );
    });

    return (
        <div ref={divEl} className="w-48 relative">
            <Panel
                className="flex justify-between items-center cursor-pointer "
                onClick={handleClick}
            >
                {value?.label || "Select..."}
                <GoChevronDown className="text-lg" />
            </Panel>
            {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
        </div>
    );
}

export default Dropdown;
