import React, {useState} from 'react';
import styles from './App.module.scss'
import {Link, Outlet} from "react-router-dom";
import avatarPng from "@/assets/avatar.png";
import avatarJpg from "@/assets/avatar.jpg";
import Image from "@/assets/app-image.svg"

export const App = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev) => prev + 1);

  return (
    <div data-tid="App.DataTId">
      <h1 data-tid="Platform.DataTId">PLATFORM={__PLATFORM__}</h1>
      <div>
        <img width={100} height={100} src={avatarPng} alt="avatar"/>
        <img width={100} height={100} src={avatarJpg} alt="avatar"/>
      </div>
      <div>
        <Image width={50} height={50} className={styles.icon} />
      </div>
      <Link to='/about'>About</Link>
      <br/>
      <Link to='/shop'>Shop</Link>
      <h1 className={styles.value}>{count}</h1>
      <button className={styles.button} onClick={increment}><span>qwerty</span></button>
      <Outlet/>
    </div>
  );
};