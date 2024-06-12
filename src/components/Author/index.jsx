import SocialMedia from "../SocialMedia";
import "./style.css";

const Author = ({ isSocailMediaShow, user }) => {
  let { avatar, name, profession } = user;
  if (!avatar) avatar = "https://api.dicebear.com/6.x/identicon/svg";
  if (!name) name = "unknown";
  if (!profession) profession = "---";

  return (
    <div className="author_container">
      <div className="profile">
        <img src={avatar} alt="" />
        <div className="info">
          <div className="name">By {name}</div>
          <div>{profession}</div>
        </div>
      </div>
      {isSocailMediaShow && <SocialMedia />}
    </div>
  );
};

export default Author;
