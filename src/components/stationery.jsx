import React from "react";
import styles from "./stationery.module.css";
export function Stationery() {
    return (
        <div className={styles.mds_a}>
            <ul className={styles.mds}>
                <li>
                    <img src="/stationery/md_pick_title.png"
                         className={styles.lazyload} alt=""/>
                </li>
                <li>
                    <a href="https://www.barunsoncard.com//product/list_option.asp?gb=sealing">
                        <img className={styles.lazyload1}
                             src='/stationery/MD_15774_20240124102725699.jpg' alt=""/>
                    </a>
                </li>
                <li>
                    <a href="https://www.barunsoncard.com//product/list_option.asp?gb=flower">
                        <img className={styles.lazyload2}
                             src="/stationery/MD_15772_20230904113305780.jpg" alt=""/>
                    </a>
                </li>
                <li>
                    <a href="https://www.barunsoncard.com/product/list_option.asp?gb=ribbon">
                        <img className={styles.lazyload3}
                             src="/stationery/MD_15773_20230904113230354.jpg" alt=""/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Stationery;
