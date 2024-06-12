import SocialMedia from "../SocialMedia";
import "./style.css";

const Footer = () => {
  return (
    <footer>
      <div className="main">
        <div className="contact">
          <h1 className="title">Contact the Publisher</h1>
          <p>mike@parther.com</p>
          <p>mike@parther.com</p>
          <p>+944 450 904 505</p>
        </div>

        <div className="explorate">
          <h1>Explorate</h1>
          <p>About</p>
          <p>Partners</p>
          <p>Job Opportunities</p>
          <p>Advertise</p>
          <p>Membership</p>
        </div>

        <div className="headquarter">
          <h1 className="title">Headquarter</h1>
          <p>191 Middleville Road, NY 1001, Sydney Australia</p>
        </div>

        <div className="connections">
          <h1>Connections</h1>
          <SocialMedia />
        </div>
      </div>

      <div className="bottom_section">
        <p>2021 | Parther Publisher Studio</p>
        <p>Subscribe Now</p>
      </div>
    </footer>
  );
};

export default Footer;
