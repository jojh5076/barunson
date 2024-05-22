import React from "react";
import styles from "./notice_cs.module.css";

export function NoticeCs() {
    return (
        <div className={styles.notice_csContainer} style={{ padding: '70px 0 40px 0' }}>
            <div className={styles.notice_cs}>
                <div className={styles.noticeContent}>
                    <div className={styles.noticeTitle}>
                        <a href="https://www.barunsoncard.com/custom/notice_list.asp"><span>더보기 &gt;</span></a>
                    </div>
                    <ul className={styles.noticeList}>
                        <li><span><a href="https://www.barunsoncard.com//custom/notice_view.asp?seq=4088">· [당첨자발표] 4월의 우수 이용후기 당첨자 발표</a></span></li>
                        <li><span><a href="https://www.barunsoncard.com//custom/notice_view.asp?seq=4084">· [공지] 5월 고객센터 휴무 안내 (5/1, 5/6, 5/15)</a></span></li>
                        <li><span><a href="https://www.barunsoncard.com//custom/notice_view.asp?seq=4083">· [당첨자발표] 스타우브 기억에 남는 순간 이벤트 당첨자 발표</a></span></li>
                    </ul>
                    <ul className={styles.noticeGuides}>
                        <li className={styles.noticeGuideItem}><a href="https://www.barunsoncard.com//custom/guide_01.asp"><span>제작순서</span><span>가이드</span></a></li>
                        <li className={styles.noticeGuideItem}><a href="https://www.barunsoncard.com//custom/guide_02.asp"><span>자주하는</span><span>구매실수</span></a></li>
                        <li className={styles.noticeGuideItem}><a href="https://www.barunsoncard.com//custom/guide_03.asp"><span>제작일정</span><span>미리계산</span></a></li>
                    </ul>
                    <ul className={styles.noticeExtras}>
                        <li className={styles.noticeExtraItem}><a href="https://www.barunsoncard.com//gnb/map_list.asp"><span>예식장</span><span>약도찾기</span></a></li>
                        <li className={styles.noticeExtraItem}><a href="https://www.barunsoncard.com//gnb/greetings_list_v2.asp"><span>청첩장</span><span>인사말</span></a></li>
                        <li className={styles.noticeExtraItem}><a href="http://blog.naver.com/barunson03" target="_blank"><span>블로그</span><span>바로가기</span></a></li>
                    </ul>
                </div>
                <div className={styles.customerContent}>
                    <div className={styles.customerServiceTitle}>
                        <a href="https://www.barunsoncard.com//custom/faq_list.asp"><span>더보기 &gt;</span></a>
                    </div>
                    <ul className={styles.customerServiceList}>
                        <li className={styles.customerServiceItem}>
                            <span className={styles.icon}></span>
                            <p><img src="/notice/img_custom01.png" width="56" height="56" alt="아이콘" /></p>
                            <p style={{marginTop: '20px', marginBottom: '10px', fontSize: '13px', color: '#777', fontWeight: 'bold'}}>1:1 친절상담</p>
                            <p style={{ fontSize: '13px'}}>문의사항을 신속하고<br />빠르게 상담 드립니다.</p>
                            <a href="https://www.barunsoncard.com//mypage/consult/consult_list.asp">
                                <p style={{marginTop: '20px', fontSize: '14px', fontWeight: 'bold',color :'#555'}} >바로가기&gt;</p>
                            </a>
                        </li>
                        <li className={styles.customerServiceItem}>
                            <span className={styles.icon}></span>
                            <p><img src="/notice/img_custom03.png" width="56" height="56" alt="아이콘" /></p>
                            <p style={{marginTop: '17px', marginBottom: '10px', fontSize: '13px', color: '#777', fontWeight: 'bold'}}>전화 상담</p>
                            <p style={{ fontSize: '13px'}}>평일 09시~18시<br />점심시간 12시~1시<br />주말 및 공휴일 휴무</p>
                            <p style={{marginTop: '13px', fontSize: '14px', fontWeight: 'bold', color :'#555'}}>1644-0708</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NoticeCs;
