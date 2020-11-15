import React from 'react';
import { Button } from './Button';

import styles from '../App.module.css'

const SideBar = ({ currentValue, setCurrentValue }) => {
    const handleChange = (event) => {
        const value = event.target.value
        setCurrentValue(value)
        console.log(value)
        for (let i = 0; i < 4; i++) {

        }
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('submit')
    }
    const handleCancel = (event) => {
        if (event) {

        }
    }

    const rangeData = [
        ['Red'],
        ['Green'],
        ['Blue']
    ]

    const rangesItems = rangeData.map((range) =>
        <><span>100 {range}</span>
            <input type='range' min='0' max='255' step='1' onChange={handleChange} /></>)

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.sideBar}>
                <div className={styles.ranges}>
                    {rangesItems}
                </div >
                <div className={styles.buttons}>
                    <Button btnName='Cancel' />
                    <Button btnName='Submit' />
                </div>
            </div>
        </form>

    )
}

export default SideBar