import React from 'react';

export const Slider = ({ range, handleChange }) => {
    return (
        <>
            <span>{range.name}: {range.value}</span>
            <input type='range' name={range.name} value={range.value} min='0' max='255' step='1' onChange={handleChange} />
        </>
    )
}