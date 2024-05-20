import React from "react";
import styles from "./info.module.css";

export function Info() {
    return (
        <div className={styles.info_container} style={{backgroundImage: `url('/info/bg_brand.jpg')`}}>
            <div className={styles.info}>
                <ul className={styles.info_list}>
                    <li>
                        <a href='http://www.barunn.net/' className={styles.info_img}>
                            <img src='/info/ban_brand_01.jpg' alt='Brand banner 1' className={styles.img1}/>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.barunsoncard.com/brand/intro/brand.asp' className={styles.info_img}>
                            <img src='/info/ban_brand_02.jpg' alt='Brand banner 2' className={styles.img2}/>
                        </a>
                    </li>
                    <li>
                        <a href='http://www.barunn.net/' className={styles.info_img}>
                            <img src='/info/ban_brand_03.jpg' alt='Brand banner 3' className={styles.img3}/>
                        </a>
                    </li>
                    <li>
                        <a className={styles.info_img}>
                            <img src='/info/ban_brand_04_230209.jpg' alt='Brand banner 4' className={styles.img4}/>
                        </a>
                    </li>
                </ul>
          </div>
        </div>
);
}

export default Info;
