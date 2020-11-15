import React from 'react';
import styles from '../App.module.css'

export const Slider = ({ range, handleChange }) => {
    return (
        <>
            <span className={styles.value}>{range.name}: {range.value}</span>
            <input className={styles.slider} type='range' name={range.name} value={range.value} min='0' max='255' step='1' onChange={handleChange} />
        </>
    )
}