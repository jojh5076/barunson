import React from "react";
import styles from "./footer.module.css";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_container}>
                <div className={styles.footer_left}>
                    <img src="/footer/logo_winter.svg" alt=" " width="150" height="27" className={styles.logo} />
                    <ul className={styles.kl_industry}>
                        <li>(주)바른컴퍼니 | 대표이사 : 박정식</li>
                        <li>본사 : 경기도 파주시 회동길 219 | 강남사옥 : 서울 서초구 서운로 142-4</li>
                        <li>문의전화 : 1644-0708 | 팩스 : 02-2275-3108 | 개인정보관리책임자 : 원덕규</li>
                        <li>통신판매업신고번호 : 2007-00940 | 사업자등록번호 : 221-81-03108</li>
                    </ul>
                    <p className={styles.copyright}>Copyright ⓒ barunsoncard all rights reserved</p>
                </div>
                <div className={styles.footer_right}>
                    <div className={styles.e_kolon}>
                        <a href="https://www.barunsoncard.com/custom/faq_list.asp">
                            <h4>고객센터</h4>
                        </a>
                        <ul>
                            <li><a href="http://barunn.net" >회사소개</a></li>
                            <li><a href="https://www.barunsoncard.com/company/company_helping.asp" >제휴문의</a></li>
                            <li><a href="http://barunn.net/#cont_contact" >오시는길</a></li>
                            <li><a href="https://www.barunsoncard.com/member/member_us.asp" >이용약관</a></li>
                            <li><a href="https://www.barunsoncard.com/member/member_pr.asp"  style={{ fontWeight: "bold" }}>개인정보처리방침</a></li>
                        </ul>
                    </div>
                    <div className={styles.cstm}>
                        <ul>
                            <li><a href="https://www.barunsoncard.com/mypage/consult/consult_list.asp" >온라인상담</a></li>
                            <li><a href="http://www.bhandswedding.com/Network" >글로벌네트워크</a></li>
                            <li><a href="http://www.premierpaper.co.kr/customer/B2B.asp?path=barunsoncard" title="인쇄물문의 바로가기"  style={{ fontWeight: "bold" }}>인쇄물문의</a></li>
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
                    <a className={styles.sns_insta} href="https://www.instagram.com/barunsoncard" >Instagram</a> <i></i>
                    <a className={styles.sns_face} href="https://www.facebook.com/barunsoncard" >Facebook</a> <i></i>
                    <a className={styles.sns_blog} href="https://blog.naver.com/barunson03" >Blog</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
