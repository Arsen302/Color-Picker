import React from 'react';

export const Button = ({ btnName }) => {
    return (
        <input type='submit' value={btnName} name={btnName} />
    )
}