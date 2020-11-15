import React from 'react';
import { SideBar, Content } from "./components/index";

import styles from './App.module.css';

function App() {
  const [currentValue, setCurrentValue] = React.useState({
    red: 229,
    green: 188,
    blue: 243
  })
  const [submitedColor, setSubmittedColor] = React.useState()
  const [cancelColor, setCancelColor] = React.useState()

  const handleChange = (event) => {
    const newColor = {
      ...currentValue,
      [event.target.name]: Number(event.target.value)
    }
    setCurrentValue(newColor)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let submit = event.target.value
    console.log(submit)
  }

  const handleCancel = (event) => {
    event.preventDefault()
    let cancel = {
      ...currentValue,

    }
    console.log(cancel)
  }

  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <SideBar currentValue={currentValue} setCurrentValue={setCurrentValue} handleSubmit={handleSubmit} handleCancel={handleCancel} handleChange={handleChange} />
        <Content currentValue={currentValue} />
      </div>
    </div>
  )
}

export default App;
