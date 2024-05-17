import React from "react";
import styles from "./last.module.css";

export  function last() {
    return(
        <div className={styles.last}>
            <div className={styles.last_item}>
            <a className={styles.img1}>
                <img src={'/312/MD_16171_20220823160420370.jpg'} alt=''/>
            </a>
            <a className={styles.img2}>
                <img src={'/312/MD_16170_20220823160424417.jpg'} alt=''/>
            </a>
            </div>
        </div>
    )
}

export default last;