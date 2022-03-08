import { Link } from "react-scroll";

export const First = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="container">
          <div className="navbar row">
            <div className="navbar-header col-xs-1 col-md-4">
              <img src="img/brand.png" className="img-responsive" alt="" />{" "}
            </div>
            <div className="navbar-menu col-xs-5 col-md-offset-3">
              <div className="row">
                <div className="col-xs-6 col-md-6 menu pull-right">
                  <Link to="contact" spy={true} smooth={true}>
                    <a href="#!">
                      <h3>베타 서비스 알림 신청</h3>
                    </a>
                  </Link>
                </div>
                <div className="col-xs-6 col-md-6 menu pull-right">
                  <a href="#!">
                    <h3>회사 소개</h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row intro-field">
            <div className="col-md-6 intro-left">
              <div className="row">
                <div className="col-md-8 intro-text">
                  <h1>
                    같이하는 가치,
                    <br />
                    우리 가치사자
                    <span></span>
                  </h1>
                  <h2>
                    배달음식, 장보기, 인터넷 쇼핑 등<br />
                    같이 할 이웃이 필요할 때, 언제든지
                  </h2>
                </div>
                <div className="col-md-4 ">
                  <img src="img/lion.png" className="intro-lion" alt="" />{" "}
                </div>
              </div>

              <div className="row download">
                <div className="col-md-6">
                  <p>QR 코드 다운로드</p>
                  <img
                    src="img/image 11.png"
                    className="img-responsive"
                    alt=""
                  />{" "}
                </div>
                <div className="col-md-6">
                  <p>앱 다운로드(베타)</p>
                  <a href="https://www.naver.com">
                    <img
                      src="img/Google Play.png"
                      className="down-img"
                      alt=""
                    />{" "}
                  </a>
                  <a href="https://www.naver.com">
                    <img
                      src="img/App Store.png"
                      className="img-responsive"
                      alt=""
                    />{" "}
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 intro-img">
              <img
                src="img/view/image 8.png"
                className="img-responsive center-block d-block mx-auto"
                alt=""
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
