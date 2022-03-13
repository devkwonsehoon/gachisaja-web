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
    <section id="home" className="sec-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12 col-12">
            <div className="sec-content">
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
          <div className="col-lg-7 col-md-12 col-12">
            <div className="hero-image text-center" data-aos="fade-up">
              <img src="img/view/Group 159.png" alt="#" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
