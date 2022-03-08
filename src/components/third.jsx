import { useEffect } from "react";
import AOS from "aos";

export const Third = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      debounceDelay: 50,
      once: false,
      mirror: true,
    });
  });

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col xs-8 col-md-8">
            <div className="row justify-content-center">
              <div data-aos="fade-up" className="down">
                {" "}
                <img
                  src="img/view/image 12.png"
                  className="img-view"
                  alt=""
                />{" "}
              </div>
              <div data-aos="fade-up" className="">
                {" "}
                <img
                  src="img/view/image 9.png"
                  className="img-view"
                  alt=""
                />{" "}
              </div>
            </div>
          </div>
          <div className="col-xs-4 col-md-4 align-self-center">
            <div className="about-text">
              <h1>
                다양한 태그를 통한 <br />
                편리하게 가치사자
              </h1>
              <h3>
                무료배송, 배송비, 배달음식, 1+1.. <br />
                혼자여서 망설였던 것들이 <br />
                가치사자에서는 함께여서 편리해요:) <br />
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
