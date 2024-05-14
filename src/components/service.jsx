import React from "react";
import styles from "./service.module.css"

export  function service() {
    return(
        <div className={styles.service}>
            <p className={styles.service_text}>부가상품 & service</p>
            <ul className={styles.service_list}>
                <li>
                    <a href="https://www.barunsoncard.com//product/list_option.asp?gb=fticket">
                        <img className={styles.lazyload} src="/service/addition01.jpg" alt="식권"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.barunsoncard.com//product/list_option.asp?gb=sticker">
                        <img className={styles.lazyload} src="/service/addition07.jpg" alt="스티커"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.barunsoncard.com//product/list_option.asp?gb=vbook">
                        <img className={styles.lazyload} src="/service/addition08.jpg" alt="방명록"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.barunsoncard.com//product/product_list_pservice.asp">
                        <img className={styles.lazyload} src="/service/addition04.jpg" alt="제본서비스"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.barunsoncard.com//product/list_quick.asp">
                        <img className={styles.lazyload} src="/service/addition05.jpg" alt="초특급제작"/>
                    </a>
                </li>
            </ul>
    </div>
    )
}

export default service;