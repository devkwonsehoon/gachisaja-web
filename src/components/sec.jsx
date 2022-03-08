import { useEffect } from "react";
import AOS from "aos";

export const Sec = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      delay: 150,
      once: false,
    });
  });

  return (
    <div id="sec">
      <div className="container">
        <div className="row">
          <div className="col-xs-4 col-md-4 align-self-center">
            <div className="">
              <h1>
                같이 사고 싶은 물품을
                <br />
                게시물로 쉽게 업로드
              </h1>
              <h3>
                같이 할 이웃을 구하기 위해 글 작성하는 걸 <br />
                부담스러워하지 않아도 돼요. <br />
                가치사자가 함께 하니까요. <br />
              </h3>
            </div>
          </div>
          <div className="col xs-8 col-md-8">
            <div className="row justify-content-center">
              <div data-aos="fade-up" className="">
                {" "}
                <img
                  src="img/view/image 16.png"
                  className="img-view"
                  alt=""
                />{" "}
              </div>
              <div data-aos="fade-up" className="">
                {" "}
                <img
                  src="img/view/image 15.png"
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
