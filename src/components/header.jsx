import { Link } from "react-scroll";

export const Header = (props) => {
  return (
    <div
      id="header"
      className="d-flex flex-column flex-md-row align-items-center p-3 px-md-5 
    ">
      <img src="img/brand.png" className="my-0 mr-md-auto img-brand" alt="" />{" "}
      <nav className="my-2 my-md-0 mr-md-3 nav-bar">
        <Link to="needs-validation" spy={true}>
          <a className="menu-item p-5" href="#!">
            <h3>베타 서비스 알림 신청</h3>
          </a>
        </Link>
        <a className="menu-item p-5" href="#!">
          <h3>회사 소개</h3>
        </a>
      </nav>
    </div>
  );
};
