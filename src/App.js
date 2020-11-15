import React from 'react';
import { SideBar, Content } from "./components/index";

import styles from './App.module.css';

function App() {
  const [currentValue, setCurrentValue] = React.useState({
    red: 229,
    green: 188,
    blue: 243
  })
  const [newValue, setNewValue] = React.useState()

  const handleChange = (event) => {
    let newColor = {
      ...currentValue,
      [event.target.name]: Number(event.target.value)
    }
    setCurrentValue(newColor)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('submit')
  }

  const handleCancel = (event) => {
  }

  return (
    <div className={styles.app}>
      <SideBar currentValue={currentValue} setCurrentValue={setCurrentValue} handleSubmit={handleSubmit} handleChange={handleChange} />
      <Content currentValue={currentValue} />
    </div >
  )
}

export default App;
