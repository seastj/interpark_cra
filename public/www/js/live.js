window.addEventListener("load", function () {
  const liveApiData = [
    {
      uid: 1,
      이미지주소:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/159/20250612081529.png",
      라이브: "라이브",
      제목: "[라마다 호텔] 해운대/여수/자은도/거제 4지점 라이브 특가🎊",
      날짜: "06월 16일 (월)",
      시간: "18:00",
      상세이미지주소:
        "https://common-live-vod.interparkcdn.net/data/image/20250613/14/159/20250613020241.png",
      상세정보: "라마다 스위츠 거제 호텔",
    },
     {
      uid: 2,
      이미지주소:
        "https://common-live-vod.interparkcdn.net/data/image/20250617/14/96/20250617021040.png",
      라이브: "라이브",
            제목: "[싱가포르항공] 월드 클래스 서비스 항공사 싱가포르/허니문/호주 노선 특가👑",
      날짜: "06월 18일 (수)",
      시간: "11:00", 
      상세이미지주소:"https://common-live-vod.interparkcdn.net/data/image/20250613/14/159/20250613020241.png",
      상세정보: "라마다 스위츠 거제 호텔",
    },
   {
      uid: 3,
      이미지주소:
        "https://common-live-vod.interparkcdn.net/data/image/20250610/14/153/20250610023358.jpeg",
      라이브: "라이브",
            제목: "[휘닉스 브랜드 호텔&리조트] 여름맞이 평창&제주 특가",
      날짜: "06월 19일 (목)",
      시간: "19:00",
      상세이미지주소:"https://common-live-vod.interparkcdn.net/data/image/20250613/14/159/20250613020241.png",
      상세정보: "라마다 스위츠 거제 호텔",
    },
    {
      uid: 4,
      이미지주소:
        "	https://common-live-vod.interparkcdn.net/data/image/20250612/14/151/20250612011101.jpg",
      라이브: "라이브",
      제목: "[푸꾸옥 자유여행] 5성급 노보텔 vs 4성급 빈홀리데이 피에스타! 30만원대~ 🏝 프라이빗 렌터카+객실당 망고 1kg",
      날짜: "06월 18일 (수)",
      시간: "11:00", 
      상세이미지주소:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/151/20250612014205.jpg",
      상세정보: "[기획전] 푸꾸옥 자유여행 혜택 보기",
    },
    {
      uid: 5,
      이미지주소:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/160/20250612044328.png",
      라이브: "라이브",
      제목: "[월요라이브] 뮤지컬 '차미' - 이재림, 박새힘, 황순종, 서동진 배우 출연",
      날짜: "06월 18일 (수)",
      시간: "11:00", 
      상세이미지주소:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/160/20250612044459.png",
      상세정보: "월요라이브 자세히보기!",
    },
    {
      uid: 6,
      이미지주소:
        "https://common-live-vod.interparkcdn.net/data/image/20250410/14/96/20250410063525.png",
      라이브: "라이브",
            제목: "[진에어] 선착순 쿠폰! 전 노선 위탁수하물 15KG 포함 라이브 특가💚",
      날짜: "06월 18일 (수)",
      시간: "11:00", 
      상세이미지주소:
        "https://common-live-vod.interparkcdn.net/data/image/20250610/14/152/20250610092726.png",
      상세정보: "[쿠폰 기획전] 진에어 라이브 특가",
    },
    {
      uid: 7,
      이미지주소:
        "https://common-live-vod.interparkcdn.net/data/image/20250609/14/96/20250609151841.png",
      라이브: "라이브",
            제목: "[리솜리조트] 여름을 빛낼 가장 특별한 여정 힐링 특가",
      날짜: "06월 18일 (수)",
      시간: "11:00", 
      상세이미지주소:
        "https://media.interparkcdn.net/interpark-tour/image/upload/w_640,h_410,c_limit/v1739859931/domstay/fc0216b6fe6043c5.jpg",
      상세정보: "스플라스 리솜(덕산)",
    },
    {
      uid: 8,
      이미지주소:
        "	https://common-live-vod.interparkcdn.net/data/image/20250409/14/159/20250409080454.jpg",
      라이브: "라이브",
            제목: "[이스타항공] 부산 ↔ 푸꾸옥 국적사 단독 신규취항! 27개 노선, 왕복 8만원대부터 🎈",
      날짜: "06월 18일 (수)",
      시간: "11:00", 
      상세이미지주소:
        "https://common-live-vod.interparkcdn.net/data/image/20250325/14/152/20250325045420.png",
      상세정보: "[쿠폰/전노선] 이스타항공 기획전",
    },
    
  ];

  let html = ``;

  html = ``;

  for (let i = 0; i < liveApiData.length; i++) {
    // 임시 태그
    let tag = `
    <div class="swiper-slide">
                    <a href="#" class="live_slide_item">
                      <div class="live_image">
                        <img
                          src="${liveApiData[i].이미지주소}"
                          라이브="${liveApiData[i].배경}"
                        />
                      </div>
                      <div class="live_info">
                        <div class="live_state">
                          <span class="live_wait">${liveApiData[i].라이브}</span>
                        </div>
                        <p class="live_item_title">${liveApiData[i].제목}
                        </p>
                        <div class="live_day">
                          <div class="live_day_date">${liveApiData[i].날짜}</div>
                          <div class="live_day_time">${liveApiData[i].시간}</div>
                        </div>
                        <div class="live_detail">
                          <div class="live_detail_image">
                            <img
                              src="${liveApiData[i].상세이미지주소}"
                              라이브="${liveApiData[i].상세정보}"
                            />
                          </div>
                          <p class="live_detail_title">
                            ${liveApiData[i].상세정보}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
    `;

    html = html + tag;
  }

  const livePos = this.document.querySelector(".sw_live .swiper-wrapper");
  livePos.innerHTML = html;

  new Swiper(".sw_live", {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".live_slide_next",
      prevEl: ".live_slide_prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
});
