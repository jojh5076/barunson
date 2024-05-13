import React from "react";

export function Stationery() {
    return (
        <div className="mds_a" style={{ width: "100%", backgroundColor: "#fdf8eb", height: "344px", paddingTop: "30px", clear: "both" }}>
            <ul className="mds" style={{ width: "1100px", margin: "0 auto", marginTop: "60px" }}>
                <li><img src="https://static.barunsoncard.com/barunsoncard/main/pc/md_pick_title.png" width="436" height="130"/></li>

                <li><a href="https://www.barunsoncard.com//product/list_option.asp?gb=sealing">
                    <img style={{ margin: "0 0 22px 22px", width: "641px", height: "419px" }} className="lazyload"
                         src='/stationery/MD_15774_20240124102725699.jpg'/></a></li>

                <li><a href="https://www.barunsoncard.com//product/list_option.asp?gb=flower">
                    <img style={{ marginTop: "-314px", width: "436px", height: "656px" }} className="lazyload"
                         src="/stationery/MD_15772_20230904113305780.jpg"/></a></li>

                <li><a href="https://www.barunsoncard.com/product/list_option.asp?gb=ribbon">
                    <img style={{ marginLeft: "22px", marginBottom: "80px", width: "641px", height: "419px" }} className="lazyload"
                         src="/stationery/MD_15773_20230904113230354.jpg"/></a></li>
            </ul>
        </div>
    )
}

export default Stationery;
