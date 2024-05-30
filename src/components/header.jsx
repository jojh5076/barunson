import React, { useState } from 'react';
import styles from "./header.module.css";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [reviewHovering, setReviewHovering] = useState(false);
    const [eventHovering, setEventHovering] = useState(false);
    const [guideHovering, setGuideHovering] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={styles.header_box}>
            <div className={styles.header_top}>
                <div className={styles.header_inner}>
                    <div className={styles.header_navi}>
                        <ul>
                            <li>패밀리 브랜드</li>
                            <li>
                                <a href="https://www.premierpaper.co.kr/?src=image&amp;kw=000006" target="_blank"
                                   className={styles.tooltip} rel="noopener noreferrer"
                                   data-hover="연예인이 선택한 청첩장 쇼핑몰">
                                    <img src="/images/brand_tit_pp.png" alt="프리미어페이퍼" width="85" height="15" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.barunsonmcard.com" target="_blank"
                                   className={styles.tooltip} rel="noopener noreferrer"
                                   data-hover="청첩장 구매 시, 모바일청첩장 무료!">
                                    <img src="/images/barunsonmcard.svg" alt="바른손M카드" width="78" height="15" />
                                </a>
                            </li>
                            <li className={styles.thegift}>
                                <a href="https://www.barunsonthegift.com" target="_blank"
                                   className={styles.tooltip} rel="noopener noreferrer"
                                   data-hover="답례 선물 전문몰, 바른손더기프트">
                                    <img src="/images/thegift.svg" alt="더기프트" width="70" height="20" />
                                </a>
                            </li>
                            <li>
                                <a href="http://www.deardeer.kr?src=image&amp;kw=000030" target="_blank"
                                   className={styles.tooltip} rel="noopener noreferrer"
                                   data-hover="소중한 당신에게 디얼디어">
                                    <img src="/images/brand_tit_dd.png" alt="디얼디어" width="67" height="15" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.userMenu}>
                        <ul>
                            <li id="h_tool_e">
                                <span>샘플장바구니</span>
                                <span className={styles.count_box}>
                                    <span className={styles.sample_count}>0</span>
                                </span>
                            </li>
                            <li>
                                <span>마이페이지</span>
                            </li>
                            <li className={styles.top_join_wrap}>
                                <span>회원가입</span>
                            </li>
                            <li className={styles.top_login_wrap}>
                                <span>로그인</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.header_Menu}>
                <div className={styles.head}>
                    <div className={styles.head_inner}>
                        <div className={styles.brand_navi}>
                            <div className={styles.logo_a}>
                                <a href="https://www.barunsoncard.com/">
                                    <img src="/images/logo_barunson.png" alt="바른손카드"
                                         style={{ marginTop: "32px" }} width="190" height="35" />
                                </a>
                                <div className={styles.mega_gnb}>
                                    <a href="https://www.barunsoncard.com/event/event_sample.asp?"
                                       title="무료샘플 바로가기">
                                        <strong>무료샘플 신청하세요</strong> <span>GO</span>
                                    </a>
                                </div>
                                <div className={styles.search_a}>
                                    <fieldset>
                                        <form style={{ borderBottom: "1px solid #555" }}>
                                            <input className={styles.itext_jtxtoff} placeholder="카드코드를 입력해 주세요" />
                                            <a href="#" className={styles.btn_search}
                                               onClick={() => document.getElementsByName('topFrm')[0].submit()}>
                                                <img
                                                    src="/icon/ico_16_search.svg"
                                                    width="16" height="16" alt="검색" />
                                            </a>
                                        </form>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.gnb_a}>
                    <div className={styles.gnb}>
                        <ul className={styles.menu}>
                            <li>
                                <button type="button" id="btn_roll" onClick={handleMenuToggle}>
                                    <img src="/icon/ico_12_menu.svg"
                                         alt="전체보기" width="12" height="11" className={styles.all_btn} />
                                </button>
                            </li>
                            <li>
                                <a className={styles.btn_roll}
                                   href="https://www.barunsoncard.com/product/list_all.asp"
                                   title="청첩장 바로가기"> 청첩장 </a>
                            </li>
                            <li>
                                <a className={styles.btn_roll}
                                   href="https://www.barunsoncard.com/order/mcard/mcard_main_new.asp"
                                   title="모바일청첩장 바로가기"> 모바일청첩장 </a>
                            </li>
                            <li>
                                <a className={styles.btn_roll}
                                   href="https://www.barunsoncard.com/event/weddingfreecoupon.asp"
                                   title="식전영상 바로가기"> 식전영상 </a>
                            </li>
                            <li className={styles.btn_roll} id="gnb_mo">
                                <a className={styles.btn_roll}
                                   href="https://www.barunsoncard.com/event/event_gift.asp"
                                   title="답례품 바로가기"> 답례품 </a>
                            </li>
                            <li>
                                <a className={styles.btn_roll}
                                   href="https://www.barunsoncard.com/product/list_thanks.asp"
                                   title="감사장 바로가기"> 감사장 </a>
                            </li>
                            <li>
                                <a className={styles.btn_roll}
                                   href="https://www.barunsoncard.com/product/list_option_intro.asp"
                                   title="부가상품 바로가기"> 부가상품 </a>
                            </li>
                            <li className={styles.btn_roll}>
                                <a className={styles.btn_roll}
                                   href="https://www.barunsoncard.com/product/list_best.asp"
                                   title="베스트 바로가기"> 베스트 </a>
                            </li>
                            <li className={styles.btn_roll}>
                                <a className={styles.btn_roll}
                                   href="https://www.barunsoncard.com/product/list_new.asp"
                                   title="신상 바로가기"> 신상 </a>
                            </li>
                        </ul>
                        <ul className={styles.sgnb_b}>
                            <li className={styles.dot_type} onMouseOver={() => setReviewHovering(true)}
                                onMouseOut={() => setReviewHovering(false)}>
                                후기{reviewHovering && (
                                <div className={styles.sgnb_b_box}>
                                    <ul className={styles.sgnb_b_list_01}>
                                        <li>
                                            <a href="https://www.barunsoncard.com/event/event_sampleReviews.asp">샘플후기 </a>
                                        </li>
                                        <li>
                                            <a href="https://www.barunsoncard.com/gnb/review_list.asp">구매후기 </a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                            </li>
                            <li onMouseOver={() => setEventHovering(true)}
                                onMouseOut={() => setEventHovering(false)}>
                                혜택/이벤트{eventHovering && (
                                <div className={styles.sgnb_b_box}>
                                    <ul className={styles.sgnb_b_list_02}>
                                        <li>
                                            <a href="https://www.barunsoncard.com/event/event_benefit.asp">혜택모아</a>
                                        </li>
                                        <li>
                                            <a href="https://www.barunsoncard.com/event/event_main.asp">이벤트</a>
                                        </li>
                                        <li>
                                            <a href="https://www.barunsoncard.com/magazine/magazine_list.asp">웨딩 팁
                                                <span>Tip</span></a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                            </li>
                            <li onMouseOver={() => setGuideHovering(true)}
                                onMouseOut={() => setGuideHovering(false)}>
                                이용가이드{guideHovering && (
                                <div className={styles.sgnb_b_box}>
                                    <ul className={styles.sgnb_b_list_03}>
                                        <li>
                                            <a href="https://www.barunsoncard.com/event/event_shopping.asp">청첩장 제작 설명서</a>
                                        </li>
                                        <li>
                                            <a href="https://www.barunsoncard.com/gnb/greetings_list_v2.asp">청첩장 인사말</a>
                                        </li>
                                        <li>
                                            <a href="https://www.barunsoncard.com/gnb/map_list.asp">예식장 약도</a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                            </li>
                        </ul>
                    </div>
                    <div className={`${styles.all_a} ${isMenuOpen ? styles.opened : ''}`}>
                        <div className={styles.all_menu}>
                            <div className={styles.all_menu_in_left}>
                                <ul>
                                    <li>
                                        <span className={styles.primary}>카드</span>
                                    </li>
                                    <li>
                                        <a href="https://www.barunsoncard.com/product/list_all.asp">청첩장
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.barunsoncard.com/order/mcard/mcard_main_new.asp">모바일청첩장
                                            <span className={styles.point}>FREE</span></a>
                                    </li>
                                    <li>
                                        <a href="https://www.barunsoncard.com/product/list_thanks.asp">감사장
                                            <span className={styles.point}>15% 쿠폰</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.barunsoncard.com/product/list_invitation.asp">초대장
                                        </a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="https://www.barunsoncard.com/product/list_option_intro.asp">
                                            <span className={styles.primary}>부가상품 </span> <span className={styles.primary_}> &gt; </span> </a>
                                    </li>
                                    <li>
                                        <a href="https://www.barunsoncard.com/product/list_option.asp?gb=env">컬러봉투</a>
                                    </li>
                                    <li>
                                        <a href="https://www.barunsoncard.com/event/special_env.asp">디자인봉투</a>
                                    </li>
                                    <li>
                                        <a href="https://www.barunsoncard.com/product/list_option.asp?gb=sealing">실링스티커</a>
                                    </li>
                                    <li>
                                        <a href="https://www.barunsoncard.com/product/list_option.asp?gb=flower">프리저브드플라워</a>
                                    </li>
                                    <li>
                                        <a href="https://www.barunsoncard.com/product/list_option.asp?gb=sticker">스티커</a>
                                    </li>
                                    <li>
                                        <a href="https://www.barunsoncard.com/product/list_option.asp?gb=ribbon">리본</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <span className={styles.primary}>추천서비스</span>
                                    </li>
                                    <li>
                                        <a href="https://www.barunsoncard.com/product/product_list_pservice.asp">제본대행
                                            서비스</a>
                                        <button type="button" className={styles.all_menu_tooltip}>
                                            <img
                                                src="/icon/ico_16_question.svg"
                                                alt="물음표 아이콘" />
                                        </button>
                                        <div className={styles.tooltip_box_tooltip_box_1}>
                                            <dl>
                                                <dt>제본대행 서비스</dt>
                                                <dd>
                                                    청첩장 속지(내지)와 봉투를 직접 붙이고 <br />
                                                    봉투에 넣는 제본 작업을 바른손카드가 대신해 <br />
                                                    드리는 서비스입니다. <br />
                                                    시간도 절약하고, 편리하게 청첩장을 받아 보세요.
                                                </dd>
                                            </dl>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="https://www.barunsoncard.com/product/list_quick.asp">초특급제작 서비스</a>
                                        <button type="button" className={styles.all_menu_tooltip}>
                                            <img
                                                src="/icon/ico_16_question.svg"
                                                alt="물음표 아이콘" />
                                        </button>
                                        <div className={styles.tooltip_box_tooltip_box_2}>
                                            <dl>
                                                <dt>초특급제작 서비스</dt>
                                                <dd>
                                                    예식 준비로 바쁘신가요? <br />
                                                    당일 제작, 당일 출고를 원하시는 고객님께 <br />
                                                    추천해 드리는 서비스입니다.
                                                </dd>
                                            </dl>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="https://www.barunsoncard.com/event/weddingfreecoupon.asp">식전영상
                                            <span className={styles.point}> FREE </span></a>
                                    </li>
                                    <li>
                                        <a href="https://www.barunsoncard.com/event/event_gift.asp">답례품</a>
                                    </li>
                                    <li>
                                        <a href="https://www.barunsoncard.com/product/detail_photo.asp">고급사진보정
                                            <span className={styles.point}> EVENT </span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
