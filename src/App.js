import React from 'react';
import { SideBar, Content } from "./components/index";
import { Button } from './components/Button';


import styles from './App.module.css';

function App() {
  const [currentValue, setCurrentValue] = React.useState()
  const [newValue, setNewValue] = React.useState()

  let input = document.querySelectorAll('input')

  const handleChange = (event) => {
    const value = event.target.value
    // setCurrentValue(value)
    console.log(value)
    const newValue = {
      backgroundColor: `rgb(${value}, 255, 255)`
    }
    /* Бля дебил, ты че те не надо как 
    в vanilla js все через id брать в цикле!  
    Ты функцию вставляешь в каждый компонент
    и он должен сразу в стили менять: Загугли как можно css поменять через JS  
    */
    // for (let i = 0; i < input.length; i++) {
    //   input[i].addEventListener('input', () => {
    //     // value
    //   })
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
      <input className={newValue} type='range' min='0' max='255' step='1' onChange={handleChange} /></>)

  return (
    <div className={styles.app}>
      <form onSubmit={handleSubmit}>
        <div className={styles.sideBar}>
          <div className={styles.ranges}>
            <span>100 Red</span>
            <input type='range' min='0' max='255' step='1' onChange={handleChange} />
            <span>100 Green</span>
            <input type='range' min='0' max='255' step='1' onChange={handleChange} />
            <span>100 Blue</span>
            <input type='range' min='0' max='255' step='1' onChange={handleChange} />
          </div >
          <div className={styles.buttons}>
            <Button btnName='Cancel' />
            <Button btnName='Submit' />
          </div>
        </div>
      </form>
      <div className={newValue}></div>
      {/* <div className={`${styles.content} + ${newValue}`}></div> */}
      {/* <SideBar currentValue={currentValue} setCurrentValue={setCurrentValue} /> */}
      {/* <Content /> */}
    </div >
  )
}

export default App;
