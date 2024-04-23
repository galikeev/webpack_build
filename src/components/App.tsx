import React, {useState} from 'react';
import styles from './App.module.scss'

export const App = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev) => prev + 1);

  return (
    <div>
      <h1 className={styles.value}>{count}</h1>
      <button className={styles.button} onClick={increment}><span>qwerty</span></button>
    </div>
  );
};