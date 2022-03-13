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
    <section id="home" className="third-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12 col-12">
            <div className="hero-image" data-aos="fade-up">
              <img src="img/view/Group 159.png" alt="#" />
            </div>
          </div>
          <div className="col-lg-5 col-md-12 col-12">
            <div className="third-content">
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
    </section>
  );
};
