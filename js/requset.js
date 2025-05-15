const sliderWapper = document.querySelector('.swiper-wrapper');

// 외부 데이터 요청 관련 코드
const getData = async () => {
  await fetch(
    'https://www.dabipyeung.com/soaply_backend/model/get_products.php?qnt=4'
  )
    .then((res) => res.json())
    .then((data) => {
      let dataElement = '';
      data.map((item) => {
        dataElement = `
          <div class="swiper-slide">
            <div class="slider_image">
              <img src="./img/${item.pro_img}" alt="슬라이더 이미지">
            </div>
            <div class="slider_text">
              <h4>${item.pro_name}</h4>
              <p>
                ${item.pro_desc}
              </p>
              <a href="#" class="common_btn">자세히 보기</a>
            </div> <!-- slider_text -->
          </div> <!-- swiper-slide-->
        `;
        sliderWapper.insertAdjacentHTML('beforeend', dataElement);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

getData();
