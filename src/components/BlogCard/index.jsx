import Author from "../Author";
import "./style.css";
import { useEffect, useState } from "react";
import usersDummyData from "../../helper/data/users.js";

const BlogCard = ({ item }) => {
  const [author, setAuthor] = useState({});
  useEffect(() => {
    const getSingleData = () => {
      let authorRes = usersDummyData.find((e) => e.id == item.user);
      if (authorRes) setAuthor(authorRes);
    };
    getSingleData();
  });
  return (
    <>
      <div className="blog_card">
        <div className="blog_img_container">
          <img src={item.image} alt="" />
          <div className="tags">
            {item.tags.map((tag, index) => (
              <p key={index}>{tag}</p>
            ))}
          </div>
        </div>
        <div className="date">{item.created_at}</div>
        <div className="title">{item.title}</div>
        <div className="description">{item.description}</div>

        <span className="line"></span>

        <Author isSocailMediaShow={false} user={author} />
      </div>
    </>
  );
};

export default BlogCard;
