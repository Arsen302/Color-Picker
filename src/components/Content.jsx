import React from 'react';
import styles from '../App.module.css';

const Content = ({ currentValue }) => {
    return (
        <div style={{
            backgroundColor: `rgb(${currentValue.red}, ${currentValue.green}, ${currentValue.blue})`
        }}
            className={styles.content}>
        </div>
    )
}

export default Content