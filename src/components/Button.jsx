import React from 'react';

export const Button = ({ btnName }) => {
    return (
        <input type='button' value={btnName} name={btnName} />
    )
}