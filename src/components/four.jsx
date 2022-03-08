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
    <div id="four">
      <div className="container">
        <div className="row">
          <div className="col-xs-4 col-md-4 align-self-center">
            <div className="about-text">
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
          <div className="col xs-8 col-md-8">
            <div className="row justify-content-center">
              <div data-aos="fade-up" className="">
                {" "}
                <img
                  src="img/view/image 14.png"
                  className="img-view"
                  alt=""
                />{" "}
              </div>
              <div data-aos="fade-up" className="down">
                {" "}
                <img
                  src="img/view/image 13.png"
                  className="img-view"
                  alt=""
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
