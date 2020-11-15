import React from 'react';
import styles from '../App.module.css'

export const Button = ({ btnName, handleSubmit, handleCancel }) => {
    return (
        <input className={styles.button} type='submit' value={btnName} onSubmit={handleSubmit} onCancel={handleCancel} />
    )
}