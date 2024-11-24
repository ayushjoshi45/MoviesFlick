import React from "react";
const Dropdown=({title,options,func})=>{
    return (
        <div className="dropdown-btn">
            <select onChange={func} defaultValue="0" name="format" id="format">
                <option value="0" disabled>
                    {title}
                </option>
                {options.map((items,index)=>(
                    <option key={index} value={items} >{items.toUpperCase()}</option>
                ))}
            </select>
        </div>
    )
}
export default Dropdown