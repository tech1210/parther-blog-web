import { useEffect, useState } from "react";
import Author from "../../components/Author";
import Slider from "../../components/Slider";
import "./style.css";
import { useParams } from "react-router-dom";
import blogsDummyData from "../../helper/data/blogs.js";
import usersDummyData from "../../helper/data/users.js";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [author, setAuthor] = useState({});

  useEffect(() => {
    const getSingleData = () => {
      let blogRes = blogsDummyData.find((e) => e.id == id);
      if (blogRes) setBlog(blogRes);

      let authorRes = usersDummyData.find((e) => e.id == blog.user);
      if (authorRes) setAuthor(authorRes);
    };
    getSingleData();
  });

  return (
    <>
      <Slider />

      <div className="single_blog">
        <div className="top_section">
          <p className="date">{blog.created_at}</p>
          <span className="line"></span>
          <p className="time"> 4 minutes</p>
        </div>
        <div className="main">
          <div className="title">{blog.title}</div>

          <div className="content">
            Seamlessly syndicate cutting-edge architectures rather than
            collaborative collaboration and idea-sharing. Proactively incubate
            visionary interfaces whereas premium benefits. Seamlessly negotiate
            ubiquitous leadership skills rather than parallel ideas.
            Dramatically visualize superior interfaces for best-of-breed
            alignments. Synergistically formulate performance based users
            through customized relationships. Interactively deliver
            cross-platform ROI via granular systems. Intrinsicly enhance
            effective initiatives vis-a-vis orthogonal outsourcing. Rapidiously
            monetize market-driven opportunities with multifunctional users.
            Collaboratively enhance visionary opportunities through
            revolutionary schemas. Progressively network just in time customer
            service without real-time scenarios. Synergistically drive
            e-business leadership with unique synergy. Compellingly seize market
            positioning ROI and bricks-and-clicks e-markets. Proactively
            myocardinate timely platforms through distributed ideas.
            Professionally optimize enabled core competencies for leading-edge
            sources. Professionally enhance stand-alone leadership with
            innovative synergy. Rapidiously generate backend experiences
            vis-a-vis long-term high-impact relationships. Authoritatively
            supply market-driven mindshare and bricks-and-clicks opportunities.
            Holisticly create diverse innovation through adaptive communities.
            Efficiently empower seamless meta-services with impactful
            opportunities. Distinctively transition virtual outsourcing with
            focused e-tailers.
            <span className="imp">
              “ Monotonectally seize superior mindshare rather than efficient
              technology. ”{" "}
            </span>
            Compellingly enhance seamless resources through competitive content.
            Continually actualize 24/365 alignments for resource-leveling
            platforms. Energistically enhance high standards in models and
            professional expertise. Intrinsicly iterate extensible metrics for
            prospective opportunities. Continually develop leading-edge
            experiences through quality e-services.
          </div>

          <div className="tags">
            {blog.tags?.map((tag, index) => (
              <p key={index}>{tag}</p>
            ))}
          </div>

          <span className="line"></span>

          <Author isSocailMediaShow={true} user={author} />
        </div>
      </div>
    </>
  );
};

export default Blog;
