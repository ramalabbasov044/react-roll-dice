import React from 'react'
import styles from './Button.module.css'

const Button = ({ callCard , title}) => {
    let setLoad = () => {
        callCard(true)
    }
    return (
        <>
            <button onClick={setLoad} className={styles.Button}>{title}</button>
        </>
    )
}

export default Button