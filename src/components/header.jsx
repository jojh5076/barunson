import React from 'react';

export function Header() {
    return (
        <div className="header_box">
            <div className="header_top">
                <div className="header_inner">
                    <div className="header_navi">
                        <ul>
                            <li>패밀리 브랜드</li>

                            <li>
                                <a href="https://www.premierpaper.co.kr/?src=image&amp;kw=000006" target="_blank"
                                   className="tooltip" rel="noopener noreferrer"
                                   data-tooltip="연예인이 선택한 청첩장 쇼핑몰">
                                    <img src="images/brand_tit_pp.png" alt="프리미어페이퍼" width="85" height="15"/>
                                </a>
                            </li>

                            <li>
                                <a href="https://www.barunsonmcard.com" target="_blank" className="tooltip"
                                   rel="noopener noreferrer"
                                   data-tooltip="청첩장 구매 시, 모바일청첩장 무료!">
                                    <img src="images/barunsonmcard.svg" alt="바른손M카드" width="78" height="15"/>
                                </a>
                            </li>

                            <li className="thegift">
                                <a href="https://www.barunsonthegift.com" target="_blank" className="tooltip"
                                   rel="noopener noreferrer"
                                   data-tooltip="답례 선물 전문몰, 바른손더기프트">
                                    <img src="images/thegift.svg" alt="더기프트" width="70" height="20"/>
                                </a>
                            </li>

                            <li>
                                <a href="http://www.deardeer.kr?src=image&amp;kw=000030" target="_blank"
                                   className="tooltip" rel="noopener noreferrer"
                                   data-tooltip="소중한 당신에게 디얼디어">
                                    <img src="images/brand_tit_dd.png" alt="디얼디어" width="67" height="15"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="userMenu">
                        <ul>
                            <li className="top_login_wrap">
                                <a href="/member/login.asp">
                                    <span>로그인</span>
                                </a>
                            </li>

                            <li className="top_join_wrap">
                                <a href="/member/join_step01_v2.asp">
                                    <span>회원가입</span>
                                </a>
                            </li>

                            <li id="h_tool_e">
                                <a href="/order/sample/basket.asp" style={{padding: '0 20px 0 0'}}>
                                    <span>샘플장바구니</span>
                                    <span className="count_box">
                                        <span className="sample_count">0</span>
							        </span>
                                </a>

                                <a href="/mypage/ord/list.asp">
                                    <span>마이페이지</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
