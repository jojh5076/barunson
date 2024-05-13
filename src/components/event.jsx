import React from 'react';
import styles from "./event.module.css";

export function Event() {
    return (
        <div className={styles.event_container}>
            <div className={styles.container}>
                <div className={styles.event}>
                    <a href="https://www.barunsoncard.com/event/event_sampleReviews.asp">
                        <img src="/event/MD_24535_20230531101038988.png" alt="청첩장 할인쿠폰"/>
                        <p className={styles.benefit_text}>
                            청첩장 <br/>할인쿠폰
                        </p>
                    </a>
                </div>
                <div className={styles.event}><a href="https://www.barunsoncard.com/event/early.asp">
                    <img src="/event/MD_26363_20240418095120102.png" alt="리본청첩장 할인쿠폰"/>
                    <p className={styles.benefit_text}>
                        리본청첩장 <br/>할인쿠폰<br/>10%
                    </p>
                </a>
                </div>
                <div className={styles.event}><a href="https://www.barunsoncard.com/order/mcard/mcard_main_new.asp">
                    <img src="/event/MD_24537_20230531101156931.png" alt="모바일청첩장 무료"/>
                    <p className={styles.benefit_text}>
                        모바일청첩장 <br/>무료
                    </p>
                </a>
                </div>
                <div className={styles.event}><a href="https://www.barunsoncard.com/event/weddingfreecoupon.asp">
                    <img src="/event/MD_24538_20230531101223770.png" alt="식전영상 무료"/>
                    <p className={styles.benefit_text}>
                        식전영상 <br/>무료
                    </p>
                </a>
                </div>
                <div className={styles.event}><a href="https://www.barunsoncard.com/event/event_benefit.asp">
                    <img src="/event/MD_25850_20231229105107429.png" alt="무료혜택"/>
                    <p className={styles.benefit_text}>
                       무료혜택
                    </p>
                </a>
                </div>
            </div>
        </div>
    );
}

export default Event;
