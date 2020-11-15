import React from 'react';
import styles from '../App.module.css';

const Content = ({ currentValue }) => {
    return (
        <div style={{
            width: "200px",
            height: "200px",
            border: "1px solid grey",
            backgroundColor: `rgb(${currentValue.red}, ${currentValue.green}, ${currentValue.blue})`
        }}>
        </div>
    )
}

export default Content