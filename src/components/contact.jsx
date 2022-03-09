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
        if (form.className.includes("was-validated"))
          form.classList.remove("was-validated");
      }
    }
    if (change)
      if (msg.className.includes("done")) msg.classList.remove("done");
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

          <form
            name="sentMessage"
            id="needs-validation"
            noValidate
            onSubmit={handleSubmit}
            autoComplete="off">
            <div className="row">
              <div className="col-md-12 d-flex justify-content-center forms">
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="메일 주소를 입력해주세요."
                    className="form-control"
                    onChange={handleChange}
                    required
                  />
                  <div id="msg" class="success success-feedback">
                    감사합니다! 해당 이메일로 서비스 출시 알림 메일을
                    보내드릴게요.
                  </div>
                  <div class="fail invalid-feedback">
                    유효한 이메일을 입력해주세요.
                  </div>
                </div>

                <button type="submit" className="btn btn-custom btn-lg">
                  신청하기
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <hr></hr>
      <div id="footer">
        <div className="container text-left">
          <div className="row foot-row">
            {/* left */}
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-4">
                  <h5>가치사자</h5>
                  <ul>
                    <li className="list-unstyled">
                      <a href="#!">회사 소개</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="#!">베타 서비스 출시 알림</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="#!">제휴·협력</a>
                    </li>
                  </ul>
                </div>

                <div className="col-md-4">
                  <h5>정책</h5>
                  <ul>
                    <li className="list-unstyled">
                      <a href="#!">이용약관</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="#!">개인정보 처리방침</a>
                    </li>
                  </ul>
                </div>

                <div className="col-md-4">
                  <h5>App</h5>
                  <ul>
                    <li className="list-unstyled">
                      <a href="#!">안드로이드</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="#!">iOS</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="row footer-bottom">
                <div className="col-md-7">
                  <p>teamgachisaja@gmail.com</p>
                </div>
              </div>
            </div>

            {/* right */}
            <div className="col-xs-5 col-md-5 footer-right">
              <h5>문의</h5>
              <ul>
                <li className="list-unstyled">
                  <p className="email">teamgachisaja@gmail.com</p>
                </li>
                <li className="list-unstyled">
                  <a href="#!">
                    <img
                      src="img/instagram.png"
                      className="footer-img"
                      alt=""
                    />{" "}
                  </a>
                </li>
              </ul>

              <div className="row footer-bottom">
                <div className="col-md-6 d-flex justify-content-center">
                  <p>&copy; {new Date().getFullYear()} Gachisaja Inc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
