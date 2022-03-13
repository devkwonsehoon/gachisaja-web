import { useEffect } from "react";
import AOS from "aos";

export const Four = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      delay: 200,
      debounceDelay: 50,
      once: false,
      mirror: true,
    });
  });

  return (
    <section id="home" className="four-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12 col-12">
            <div className="four-content">
              <h1>
                이웃과 함께 소비해요 -
                <br />
                편하고 즐거운 소통
              </h1>
              <h3>
                옆집 문을 두드리는 대신 <br />
                댓글을 통해 이웃과 빠르게 소통할 수 있어요. <br />
              </h3>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 col-12">
            <div className="hero-image" data-aos="fade-up">
              <img src="img/view/Group 159.png" alt="#" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
