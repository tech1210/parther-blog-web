import "./style.css";
import { Link } from "react-router-dom";
import blogsDummyData from "../../helper/data/blogs";
import usersDummyData from "../../helper/data/users";
import BlogCard from "../../components/BlogCard";
import { useEffect, useState } from "react";

const Blogs = () => {
  const [blogsData, setBlogsData] = useState(blogsDummyData);
  const [filter, setFilter] = useState("ALL");

  useEffect(() => {
    const getdata = () => {
      let filteredBlogs;

      // ALL
      if (filter === "ALL") {
        filteredBlogs = blogsDummyData.slice(0, 8);
        setBlogsData(filteredBlogs);
      }
      // view ALL
      else if (filter === "VIEW_ALL") {
        setBlogsData(blogsDummyData);
      }
      // filter
      else {
        filteredBlogs = blogsDummyData.filter(function (elem) {
          return elem.tags.includes(filter);
        });
        setBlogsData(filteredBlogs);
      }
    };
    getdata();
  }, [filter]);

  function handleFilter(val) {
    setFilter(val);
  }
  return (
    <>
      <div className="blogs_container">
        <main className="main">
          <h1 className="head"> Popular topics</h1>
          <div className="filter">
            <ul>
              <li onClick={() => handleFilter("ALL")}>All</li>
              <li onClick={() => handleFilter("ADVENTURE")}>Adventure</li>
              <li onClick={() => handleFilter("TRAVEL")}>Travel</li>
              <li onClick={() => handleFilter("FASHION")}>Fashion</li>
              <li onClick={() => handleFilter("TECHNOLOGY")}>Technology</li>
              <li onClick={() => handleFilter("BRAND")}>Branding</li>
              <li onClick={() => handleFilter("VIEW_ALL")}>View All</li>
            </ul>
          </div>

          <div className="blogs_list">
            {blogsData.length ? (
              blogsData.map((item) => {
                let path = `/blogs/${item.id}`;
                return (
                  <Link to={path} key={item.id}>
                    <BlogCard item={item} key={item.id} />
                  </Link>
                );
              })
            ) : (
              <div className="empty">
                <p>Empty, Looks like there's no blogs available!</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default Blogs;
