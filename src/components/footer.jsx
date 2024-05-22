import React from "react";
import styles from "./footer.module.css";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerwing_move}>
                <div id="footerwingbannerList" className={`${styles.wing_css_add} swiper-container swiper-container-horizontal`}>
                    <div className="swiper-wrapper" style={{ transitionDuration: "1000ms", transform: "translate3d(-276px, 0px, 0px)" }}>
                        <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="2" style={{ width: "138px" }}>
                            <a href="/event/event_allevent.asp?acec=000409" target="_self">
                                <img src="https://file.barunsoncard.com/USER_DATA/952/MD_22245_20220506113827706.png" alt="이벤트 모음페이지" width="138" height="180" />
                            </a>
                        </div>
                        <div className="swiper-slide swiper-slide-prev" data-swiper-slide-index="0" style={{ width: "138px" }}>
                            <a href="/event/ribboncard.asp?acec=000751" target="_self">
                                <img src="https://file.barunsoncard.com/USER_DATA/952/MD_24459_20240314100235266.jpg" alt="리본청첩장 이벤트" width="138" height="180" />
                            </a>
                        </div>
                        <div className="swiper-slide swiper-slide-active" data-swiper-slide-index="1" style={{ width: "138px" }}>
                            <a href="/product/product_list_pservice.asp?acec=000468" target="_self">
                                <img src="https://file.barunsoncard.com/USER_DATA/952/MD_22385_20221216152135010.png" alt="제본서비스" width="138" height="180" />
                            </a>
                        </div>
                        <div className="swiper-slide swiper-slide-next" data-swiper-slide-index="2" style={{ width: "138px" }}>
                            <a href="/event/event_allevent.asp?acec=000409" target="_self">
                                <img src="https://file.barunsoncard.com/USER_DATA/952/MD_22245_20220506113827706.png" alt="이벤트 모음페이지" width="138" height="180" />
                            </a>
                        </div>
                        <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="0" style={{ width: "138px" }}>
                            <a href="/event/ribboncard.asp?acec=000751" target="_self">
                                <img src="https://file.barunsoncard.com/USER_DATA/952/MD_24459_20240314100235266.jpg" alt="리본청첩장 이벤트" width="138" height="180" />
                            </a>
                        </div>
                    </div>
                    <div className="swiper-pagination custom-pagination swiper-pagination-clickable swiper-pagination-bullets">
                        <span className="swiper-pagination-bullet" tabIndex="0" role="button" aria-label="Go to slide 1"></span>
                        <span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex="0" role="button" aria-label="Go to slide 2"></span>
                        <span className="swiper-pagination-bullet" tabIndex="0" role="button" aria-label="Go to slide 3"></span>
                    </div>
                    <a href="/event/event_thegiven.asp" style={{ position: "relative", zIndex: 100, margin: "10px 0 0 0", display: "block" }} target="_blank">
                        <img src="https://file.barunsoncard.com/USER_DATA/759/MD_25188_20231024113917132.png" alt="서브배너" width="138" height="53" />
                    </a>
                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                </div>
            </div>

            <div className={styles.f_cnt}>
                <div className={styles.cnt_left}>
                    <img src="/resources/images/common/logo_winter.svg" alt="Breaking Borders Logo" width="150" height="27" className={styles.logo} />
                    <ul className={styles.kl_industry}>
                        <li>(주)바른컴퍼니 | 대표이사 : 박정식</li>
                        <li>본사 : 경기도 파주시 회동길 219 | 강남사옥 : 서울 서초구 서운로 142-4</li>
                        <li>문의전화 : 1644-0708 | 팩스 : 02-2275-3108 | 개인정보관리책임자 : 원덕규</li>
                        <li>통신판매업신고번호 : 2007-00940 | 사업자등록번호 : 221-81-03108</li>
                    </ul>
                    <p className={styles.copyright}>Copyright ⓒ barunsoncard all rights reserved</p>
                </div>
                <div className={styles.cnt_right}>
                    <div className={styles.e_kolon}>
                        <a href="/custom/faq_list.asp">
                            <h4>고객센터</h4>
                        </a>
                        <ul>
                            <li><a href="http://barunn.net" target="_blank">회사소개</a></li>
                            <li><a href="/company/company_helping.asp" target="_blank">제휴문의</a></li>
                            <li><a href="http://barunn.net/#cont_contact" target="_blank">오시는길</a></li>
                            <li><a href="/member/member_us.asp" target="_blank">이용약관</a></li>
                            <li><a href="/member/member_pr.asp" target="_blank" style={{ fontWeight: "bold" }}>개인정보처리방침</a></li>
                        </ul>
                    </div>
                    <div className={styles.cstm}>
                        <ul>
                            <li><a href="/mypage/consult/consult_list.asp" target="_blank">온라인상담</a></li>
                            <li><a href="http://www.bhandswedding.com/Network" target="_blank">글로벌네트워크</a></li>
                            <li><a href="http://www.premierpaper.co.kr/customer/B2B.asp?path=barunsoncard" title="인쇄물문의 바로가기" target="_blank" style={{ fontWeight: "bold" }}>인쇄물문의</a></li>
                        </ul>
                    </div>
                    <div className={styles.callcenter}>
                        <ul>
                            <li className={styles.call_no}>1644-0708</li>
                            <li>AM 9:00 ~ PM 6:00</li>
                            <li>점심시간 PM 12:00 ~ PM 1:00</li>
                            <li>(토, 일, 공휴일 휴무)</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.box_sns}>
                    <a className={styles.sns_insta} href="https://www.instagram.com/barunsoncard" target="_blank">Instagram</a> <i></i>
                    <a className={styles.sns_face} href="https://www.facebook.com/barunsoncard" target="_blank">Facebook</a> <i></i>
                    <a className={styles.sns_blog} href="https://blog.naver.com/barunson03" target="_blank">Blog</a>
                </div>
                <button type="button" id="movetopbt" className={styles.movetopbt}>Top</button>
            </div>
        </footer>
    );
}

export default Footer;
