import React, { useState } from "react";
import styles from "./myStyle.module.css"

const Counter = () => {
  const [num, setNum] = useState(0);
  const increaseOne = () =>{
    setNum(num+1)
  }
  const decreaseOne = () =>{
    setNum(num-1)
  }
  return (
    <div className={styles.box}>
      <div
        className={styles.display}
      >
        {num}
      </div>
      <Button
        className={styles.plusButton}
        text="Plus"
        handleClick={increaseOne}
      />
      <Button
        className={styles.minusButton}
        text="Minus"
        handleClick={decreaseOne}
      />
    </div>
  );
};

const Button = (props) => {
  return <button className={props.className} onClick={props.handleClick}>{props.text}</button>;
};


export default Counter;
