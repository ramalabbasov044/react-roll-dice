import { useState } from 'react'
import Button from '../../components/Button/Button'
import RollDice from '../../components/RollDice/RollDice'
import styles from './style.module.css'

let images = {
    "item0" : "https://upload.wikimedia.org/wikipedia/commons/c/c5/Dice-1.png",
    "item1" : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Dice-2.svg/1200px-Dice-2.svg.png",
    "item2" : "https://upload.wikimedia.org/wikipedia/commons/7/70/Dice-3.png",
    "item3" : "https://upload.wikimedia.org/wikipedia/commons/a/a9/Dice-4.png" ,
    "item4" : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Dice-5.svg/1200px-Dice-5.svg.png",
    "item5" : "https://upload.wikimedia.org/wikipedia/commons/5/5c/Dice-6.png"
}

const Home = () => {
    const [loading,setLoading] = useState()

    let [imgOne,setImgOne] = useState("")
    let [imgTwo,setImgTwo] = useState("")

    let callCard = (bool) => {
        setLoading(bool)
        let item1 = Math.floor(Math.random()*6)
        let item2 = Math.floor(Math.random()*6)
        setImgOne(images[`item${item1}`]);
        setImgTwo(images[`item${item2}`]);

        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }


    return (
        <div className={styles.container}>
            
            <RollDice imgOne={imgOne} imgTwo={imgTwo}  />

            <Button callCard={callCard} title={loading ?  "Rolling..." : "Roll Dice"} />
        </div>
    )
}

export default Home