import { useState } from "react";
import Dropdown from "../components/Dropdown";

function DropDownPage() {
    const [selection, setSelection] = useState();

    const handleSelect = (option) => {
        setSelection(option);
    };

    const options = [
        { label: 'Red', value: 'red'},
        { label: 'Green', value: 'green'},
        { label: 'Blue', value: 'blue'},
    ];

    return (
        <div className="flex">
        <Dropdown options={options} value={selection}onChange={handleSelect} />
        </div>
        );
}

export default DropDownPage;
