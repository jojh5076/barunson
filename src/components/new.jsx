import React, {useState} from "react";
import styles from './new.module.css';
        
export function New() {
    const [isListVisible, setListVisible] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);
    const [buttonImage1, setButtonImage1] = useState("/new/btn_add_blue_on.png");
    const [buttonImage2, setButtonImage2] = useState("/new/btn_add_blue_off.png");

    const toggleListVisibility = () => {
        setListVisible(!isListVisible);
        setButtonClicked(true);
    };

    const handleClick = () => {
        if (buttonClicked) {

            window.location.href = "https://www.barunsoncard.com/product/list_new.asp";
        } else {
            setButtonImage1("/best/btn_addp_blue_on.png")
            setButtonImage2("/best/btn_addp_blue_off.png")
            toggleListVisibility();
        }
    };

    return(
        <div className={styles.new_list_a}>
            <div className={styles.new_list}>
                <div className={styles.new_tit}>
                    <a href="https://www.barunsoncard.com/product/list_new.asp">
                        <h3 className={styles.m_tit}>신상품</h3>
                    </a>
                </div>
                <ul className={styles.list_01}>
                    <li className={styles.s_thum}>
                        <a href="https://www.barunsoncard.com/product/detail.asp?card_seq=39309">
                            <img className={styles.lazyload} src="/new/303.png" alt=""/>
                        </a>
                        <div className={styles.goods_pricing}>
                            <span className={styles.goods_bold}>피어나는 계절 </span>
                            <span>184,800원<span>(200장)</span>
					  </span>
                        </div>
                    </li>

                    <li className={styles.s_thum}>
                        <a href="https://www.barunsoncard.com/product/detail.asp?card_seq=39264">
                            <img className={styles.lazyload} src="/new/303 (1).png" alt=""/>
                        </a>
                        <div className={styles.goods_pricing}>
                            <span className={styles.goods_bold}>고백하는 날 </span>
                            <span>153,000원<span>(200장)</span>
					  </span>
                        </div>

                    </li>

                    <li className={styles.s_thum}>
                        <a href="https://www.barunsoncard.com/product/detail.asp?card_seq=39069">
                            <img className={styles.lazyload} src="/new/303 (2).png" alt=""/>
                        </a>
                        <div className={styles.goods_pricing}>
                            <span className={styles.goods_bold}>White Dress </span>
                            <span>252,000원<span>(200장)</span>
					  </span>
                        </div>
                    </li>

                    <li className={styles.s_thum}>
                        <a href="https://www.barunsoncard.com/product/detail.asp?card_seq=39191">
                            <img className={styles.lazyload} src="/new/303 (3).png" alt=""/>
                        </a>
                        <div className={styles.goods_pricing}>
                            <span className={styles.goods_bold}>로즈골드 </span>
                            <span>222,600원<span>(200장)</span>
					  </span>
                        </div>
                    </li>

                    <li className={styles.s_thum}>
                        <a href="https://www.barunsoncard.com/product/detail.asp?card_seq=37148">
                            <img className={styles.lazyload} src="/new/303 (4).png" alt=""/>
                        </a>
                        <div className={styles.goods_pricing}>
                            <span className={styles.goods_bold}>꽃길로맨스 </span>
                            <span>202,400원<span>(200장)</span>
					  </span>
                        </div>
                    </li>

                    <li className={styles.s_thum}>
                        <a href="https://www.barunsoncard.com/product/detail.asp?card_seq=39263">
                            <img className={styles.lazyload} src="/new/303 (5).png" alt=""/>
                        </a>
                        <div className={styles.goods_pricing}>
                            <span className={styles.goods_bold}>DEAR. JANUARY </span>
                            <span>170,000원<span>(200장)</span>
					  </span>
                        </div>
                    </li>

                    <li className={styles.s_thum}>
                        <a href="https://www.barunsoncard.com/product/detail.asp?card_seq=39170">
                            <img className={styles.lazyload} src="/new/303 (6).png" alt=""/>
                        </a>
                        <div className={styles.goods_pricing}>
                            <span className={styles.goods_bold}>모던 블루 </span>
                            <span>205,000원<span>(200장)</span>
					  </span>
                        </div>
                    </li>

                    <li className={styles.s_thum}>
                        <a href="https://www.barunsoncard.com/product/detail.asp?card_seq=39129">
                            <img className={styles.lazyload} src="/new/303 (7).png" alt=""/>
                        </a>
                        <div className={styles.goods_pricing}>
                            <span className={styles.goods_bold}>골드라인 (Gold) </span>
                            <span>237,600원<span>(200장)</span>
					  </span>
                        </div>
                    </li>
                </ul>
                <ul className={`${styles.list_02} ${isListVisible ? styles.visible : styles.hidden}`}>
                    <li className={styles.s_thum}>
                        <a href="https://www.barunsoncard.com/product/detail.asp?card_seq=39116">
                            <img className={styles.lazyload} src="/new/303 (8).png" alt=""/>
                        </a>
                        <div className={styles.goods_pricing}>
                            <span className={styles.goods_bold}>The Classic </span>
                            <span>228,800원<span>(200장)</span>
					  </span>
                        </div>
                    </li>

                    <li className={styles.s_thum}>
                        <a href="https://www.barunsoncard.com/product/detail.asp?card_seq=39144">
                            <img className={styles.lazyload} src="/new/303 (9).png" alt=""/>
                        </a>
                        <div className={styles.goods_pricing}>
                            <span className={styles.goods_bold}>꽃의 노래 </span>
                            <span>193,600원<span>(200장)</span>
					  </span>
                        </div>
                    </li>

                    <li className={styles.s_thum}>
                        <a href="https://www.barunsoncard.com/product/detail.asp?card_seq=39183">
                            <img className={styles.lazyload} src="/new/303 (10).png" alt=""/>
                        </a>
                        <div className={styles.goods_pricing}>
                            <span className={styles.goods_bold}>행복한 순간 </span>
                            <span>221,400원<span>(200장)</span>
					  </span>
                        </div>
                    </li>

                    <li className={styles.s_thum}>
                        <a href="https://www.barunsoncard.com/product/detail.asp?card_seq=39118">
                            <img className={styles.lazyload} src="/new/303 (11).png" alt=""/>
                        </a>
                        <div className={styles.goods_pricing}>
                            <span className={styles.goods_bold}>사랑의 맹세 </span>
                            <span>211,200원<span>(200장)</span>
					  </span>
                        </div>
                    </li>

                    <li className={styles.s_thum}>
                        <a href="https://www.barunsoncard.com/product/detail.asp?card_seq=39311">
                            <img className={styles.lazyload} src="/new/303 (12).png" alt=""/>
                        </a>
                        <div className={styles.goods_pricing}>
                            <span className={styles.goods_bold}>함께인 계절 </span>
                            <span>184,800원<span>(200장)</span>
					  </span>
                        </div>
                    </li>

                    <li className={styles.s_thum}>
                        <a href="https://www.barunsoncard.com/product/detail.asp?card_seq=39133">
                            <img className={styles.lazyload} src="/new/303 (13).png" alt=""/>
                        </a>
                        <div className={styles.goods_pricing}>
                            <span className={styles.goods_bold}>Our Moment </span>
                            <span>264,000원<span>(200장)</span>
					  </span>
                        </div>
                    </li>

                    <li className={styles.s_thum}>
                        <a href="https://www.barunsoncard.com/product/detail.asp?card_seq=39163">
                            <img className={styles.lazyload} src="/new/303 (14).png" alt=""/>
                        </a>
                        <div className={styles.goods_pricing}>
                            <span className={styles.goods_bold}>설렘 가득히 </span>
                            <span>155,800원<span>(200장)</span>
					  </span>
                        </div>
                    </li>

                    <li className={styles.s_thum}>
                        <a href="https://www.barunsoncard.com/product/detail.asp?card_seq=39172">
                            <img className={styles.lazyload} src="/new/303 (15).png" alt=""/>
                        </a>
                        <div className={styles.goods_pricing}>
                            <span className={styles.goods_bold}>웨딩파티 </span>
                            <span>180,400원<span>(200장)</span>
					  </span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={styles.new_list_btn}>
                <a className={styles.btn_roll} onClick={handleClick}>
                    <img className={styles.on_over} src={buttonImage1} alt=""/>
                    <img className={styles.off_over} src={buttonImage2} alt=""/>
                </a>
            </div>
        </div>
    )
}

export default New;
