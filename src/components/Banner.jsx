import React from "react";
import "./Banner.css";
function Banner() {
  return (
    <div className="banner">
      <div className="layout">
        {/* <!-- 배너 슬라이드 --> */}
        <div className="banner_wrap">
          {/* <!-- Swiper --> */}
          <div className="swiper sw_banner">
            <div className="swiper-wrapper">{/* <!-- API 연동 --> */}</div>
          </div>

          {/* <!-- 슬라이드 목록 --> */}

          {/* <!-- 좌측이동 버튼 --> */}
          <button className="banner_slide_prev">
            <img src="images/slider_arrow.svg" alt="이전" />
          </button>
          {/* <!-- 우측이동 버튼 --> */}
          <button className="banner_slide_next">
            <img src="images/slider_arrow.svg" alt="다음" />
          </button>
          {/* <!-- 페이지네이션 --> */}
          <div className="banner_slide_pg">페이지네이션</div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
