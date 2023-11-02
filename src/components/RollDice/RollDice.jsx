import React from 'react'
import styles from './style.module.css'

const RollDice = ({ imgOne , imgTwo }) => {
    console.log(imgOne,imgTwo);
  return (
    <div className={styles.container}>
            <img className={styles.imgComponent} src={imgOne ? imgOne : "https://upload.wikimedia.org/wikipedia/commons/c/c5/Dice-1.png"} alt="" />
            <img className={styles.imgComponent} src={imgTwo ? imgTwo : "https://upload.wikimedia.org/wikipedia/commons/c/c5/Dice-1.png"} alt="" />
    </div>
  )
}

export default RollDice