import React from "react";
import "./Live.css";
function Live() {
  return (
    <section className="live">
      <div className="layout">
        <div className="live_header">
          <div className="live_header_title">
            <img src="images/title_live.svg" alt="live" />
          </div>
        </div>
        {/* <!-- Start Swiper live 슬라이드 --> */}
        <div className="live_slide_wrap">
          <div className="swiper sw_live">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <a href="#" className="live_slide_item">
                  <div className="live_image">
                    <img
                      src="https://common-live-vod.interparkcdn.net/data/image/20250612/14/159/20250612081529.png"
                      alt="라이브"
                    />
                  </div>
                  <div className="live_info">
                    <div className="live_state">
                      <span className="live_wait">방송예정</span>
                    </div>
                    <p className="live_item_title">
                      [라마다 호텔] 해운대/여수/자은도/거제 4지점 라이브 특가 🎊
                    </p>
                    <div className="live_day">
                      <div className="live_day_date">06월 16일 (월)</div>
                      <div className="live_day_time">18:00</div>
                    </div>
                    <div className="live_detail">
                      <div className="live_detail_image">
                        <img
                          src="https://common-live-vod.interparkcdn.net/data/image/20250612/14/151/20250612014205.jpg"
                          alt="상세정보"
                        />
                      </div>
                      <p className="live_detail_title">
                        [기획전] 푸꾸옥 자유여행 혜택 보기
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* <!-- End Swiper live 슬라이드 --> */}
          <button className="live_slide_prev">
            <img src="images/slider_arrow.svg" alt="이전" />
          </button>
          <button className="live_slide_next">
            <img src="images/slider_arrow.svg" alt="다음" />
          </button>
        </div>
        <div className="live_footer">
          <a href="#" className="live_more_bt">
            인터파크 라이브 바로가기
            <img src="images/icon_linkArrow.svg" alt="더보기" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Live;
