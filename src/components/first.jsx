export const First = (props) => {
  return (
    <section id="home" className="first-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12 col-12">
            <div className="first-content">
              <h1>
                같이하는 가치
                <br />
                우리 가치사자
              </h1>

              <div className="row align-items-start lion-text">
                <div className="col-lg-7 col-md-12 col-12">
                  <h3>
                    배달음식, 장보기, 인터넷 쇼핑 등<br />
                    같이 할 이웃이 필요할 때, 언제든지
                  </h3>
                </div>
                <div className="col-lg-3 col-md-12 col-12 lion-box">
                  <img src="img/lion.png" className="intro-lion" alt="" />
                </div>
              </div>
              <div className="row download">
                <div className="col-lg-6 col-md-12 col-12">
                  <p className="img-qr">QR 코드 다운로드</p>
                  <img src="img/image 11.png" className="img-qr" alt="" />{" "}
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                  <p>앱 다운로드(베타)</p>
                  <a href="https://www.naver.com">
                    <div className="store-box">
                      <img
                        src="img/Google Play.png"
                        className="down-img"
                        alt=""
                      />{" "}
                    </div>
                  </a>
                  <a href="https://www.naver.com">
                    <div className="store-box">
                      <img
                        src="img/App Store.png"
                        className="img-responsive"
                        alt=""
                      />{" "}
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 col-12">
            <div className="hero-image text-center" data-aos="fade-up">
              <img src="img/view/image 8.png" alt="#" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
