import React from "react";
import styles from "./suggest.module.css"
export  function suggest() {
    return(
        <div className={styles.suggest}>
            <a href={'https://www.barunsoncard.com/event/event_shopping.asp'}>
                <img className={styles.img} src={'/suggest/ban_01.png'} alt=''/>
            </a>
            <a href='https://www.barunsoncard.com/exhibition/eco.asp'>
                <img className={styles.img} src={'/suggest/ban_02.png'} alt=''/>
            </a>
            <a href='https://www.barunsoncard.com/exhibition/weddinghallbest.asp'>
                 <img className={styles.img} src={'/suggest/ban_03.png'} alt=''/>
            </a>
        </div>
    )
}

export default suggest;