import React from 'react';

const SelectControl = ({
                           value,
                           options,
                           handleSelect,
                           placeholder,
                           id,
                           customClassName,
                       }) => {
    return (
        <select
            className={`form-select ${customClassName}`}
            aria-label="Default select example"
            onChange={(ev) => handleSelect(ev.target.value)}
            value={value}
            id={id}
        >
            <option value={undefined}>{placeholder}</option>
            {
                options.map((option) => (
                    <option value={option.value} key={option.value}>{option.label}</option>
                ))
            }
        </select>
    );
}

export default SelectControl;