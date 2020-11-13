import React from 'react';
import { SideBar, Content } from "./components/index";

import styles from './App.module.css';

function App() {
  const [currentValue, setCurrentValue] = React.useState()
  const [newValue, setNewValue] = React.useState()

  return (
    <div className={styles.app}>
      <SideBar currentValue={currentValue} setCurrentValue={setCurrentValue} />
      <Content />
    </div>
  )
}

export default App;
