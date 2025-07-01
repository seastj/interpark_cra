import React from "react";
import "./Tour.css";
function Tour() {
  return (
    <section className="tour">
      <div className="layout">
        {/* <!-- 상단 --> */}
        <div className="tour_top">
          <div className="tour_top_title">
            <h2 className="title">투어 특가</h2>
            <p className="subtitle">마감임박! 금주의 특가 여행 추천</p>
          </div>
          <div className="tour_top_category">
            <ul className="tour_button_list">
              <li>
                <button className="tour_focus">마감임박</button>
              </li>
              <li>
                <button>패키지</button>
              </li>
              <li>
                <button>국내숙소</button>
              </li>
              <li>
                <button>해외숙소</button>
              </li>
              <li>
                <button>투어/입장권</button>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- 하단 --> */}
        <div className="tour_bottom">
          {/* <!-- 슬라이드 --> */}
          <div className="tour_slide_wrap">
            {/* <!--Start Swiper Tour Slide --> */}
            <div className="swiper sw_tour">
              <div className="swiper-wrapper">
                {/* <!-- 추후 API 연동으로 대체함 --> */}
              </div>
            </div>
            {/* <!--End Swiper Tour Slide --> */}

            <button className="tour_slide_prev">
              <img src="images/slider_arrow.svg" alt="이전" />
            </button>
            <button className="tour_slide_next">
              <img src="images/slider_arrow.svg" alt="다음" />
            </button>
            {/* <!-- 더보기 --> */}
            <div className="tour_more">
              <a href="#" className="tour_more_bt">
                투어 홈 바로가기
                <img src="images/icon_linkArrow.svg" alt="투어 홈 바로가기" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tour;
