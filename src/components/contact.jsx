import { useState } from "react";
import validator from "validator";

const initialState = {
  email: "",
};
export const Contact = (props) => {
  const form = document.getElementById("needs-validation");
  const msg = document.getElementById("msg");
  let change = false;
  const [{ email }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));

    if (email !== "") {
      change = true;
      if (!validator.isEmail(email)) {
        form.classList.add("was-validated");
        clearState();
      } else {
        if (form.className.includes("was-validated")) form.classList.remove("was-validated");
      }
    }
    if (change) if (msg.className.includes("done")) msg.classList.remove("done");
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validator.isEmail(email)) {
      clearState();
    } else {
      // TODO. 이메일 통신
      msg.classList.add("done");
      clearState();
    }
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="section-title text-center">
            <h1>함께 해요! 가치사자</h1>
            <h3>메일을 적어주시면 서비스 출시 알림 메일을 보내드릴게요.</h3>
          </div>

          <button
            type="submit"
            className="col-lg-6 col-md-12 col-12 d-flex m-auto justify-content-center align-items-center btn btn-custom text-center">
            <a href="https://forms.gle/gizBFKfAr2isPafx9">신청하기</a>
          </button>
        </div>
      </div>
      <hr></hr>
      <footer class="pt-4 my-md-5 pt-md-5">
        <div class="row">
          <div class="col-6 col-md">
            <h5>가치사자</h5>
            <ul>
              <li className="list-unstyled">
                <a className="list-text" href="#!">
                  회사 소개
                </a>
              </li>
              <li className="list-unstyled">
                <a className="list-text" href="#!">
                  베타 서비스 출시 알림
                </a>
              </li>
              <li className="list-unstyled">
                <a className="list-text" href="#!">
                  제휴·협력
                </a>
              </li>
            </ul>
            <div className="row footer-bottom">
              <div className="col-md-12 d-flex justify-content-center">
                <p className="email-info">teamgachisaja@gmail.com</p>
              </div>
            </div>
          </div>
          <div class="col-6 col-md">
            <h5>정책</h5>
            <ul>
              <li className="list-unstyled">
                <a className="list-text" href="#!">
                  이용약관
                </a>
              </li>
              <li className="list-unstyled">
                <a className="list-text" href="#!">
                  개인정보 처리방침
                </a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>App</h5>
            <ul>
              <li className="list-unstyled">
                <a
                  className="list-text"
                  href="https://play.google.com/store/apps/details?id=com.valuecruncher.gachisaja">
                  안드로이드
                </a>
              </li>
              <li className="list-unstyled">
                <a className="list-text" href="https://apps.apple.com/kr/app/가치사자/id1620383583">
                  iOS
                </a>
              </li>
            </ul>
          </div>

          <div class="col-12 col-md">
            <h5>문의</h5>
            <ul>
              <li className="list-unstyled">
                <p className="email">teamgachisaja@gmail.com</p>
              </li>
              <li className="list-unstyled">
                <a className="list-text" href="#!">
                  <img src="img/instagram.png" className="footer-img" alt="" />{" "}
                </a>
              </li>
            </ul>

            <div className="row footer-bottom">
              <div className="col-md-12 d-flex justify-content-center align-items-end">
                <p>&copy; {new Date().getFullYear()} Gachisaja Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
