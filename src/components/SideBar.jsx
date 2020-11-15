import React from 'react';
import { Button } from './Button';
import { Slider } from './Slider';

import styles from '../App.module.css'

const SideBar = ({ currentValue, handleChange, handleSubmit, handleCancel }) => {

    const rangesData = [
        { id: 1, name: 'red', value: currentValue.red },
        { id: 2, name: 'green', value: currentValue.green },
        { id: 3, name: 'blue', value: currentValue.blue }
    ]

    const rangesItems = rangesData.map((range) => <Slider key={range.id} range={range} handleChange={handleChange} />)

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.sideBar}>
                <div className={styles.ranges}>
                    {rangesItems}
                </div >
                <div className={styles.buttons}>
                    <Button btnName='Submit' onSubmit={handleSubmit} />
                    <Button btnName='Cancel' onCancel={handleCancel} />
                </div>
            </div>
        </form>

    )
}

export default SideBar