import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getOneBlog, removeBlog } from "../../api/blog";
import { Button } from "react-bootstrap";
import messages from "../shared/AutoDismissAlert/messages";
import dateFormat from "dateformat";
import LoadingScreen from "../shared/LoadingScreen";
import {
  BlogLayout,
  BlogAuthor,
  BlogTitleWrapper,
  BlogDate,
  BlogTextWrapper,
  VideoWrapper,
  LinkWrapper,
  ButtonGroup,
} from "./ShowBlog.styles";

const ShowBlog = ({ msgAlert, user }) => {
  const [blog, setBlog] = useState({});
  const [updated, setUpdated] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getOneBlog(id)
      .then((res) => setBlog(res.data.blog))
      .catch((err) => {
        msgAlert({
          heading: "Error getting blog",
          message: "Error getting blog",
          variant: "danger",
        });
      });
  }, [updated]);

  if (!blog) return <LoadingScreen />;

  const removeTheBlog = () => {
    removeBlog(user, blog._id)
      .then(() =>
        msgAlert({
          heading: "Success",
          message: "Remove Blog Success",
          variant: "success",
        })
      )
      .then(() => navigate("/blog"))
      .catch(() =>
        msgAlert({
          heading: "Error removing blog",
          message: "Remove Blog Failure",
          variant: "danger",
        })
      );
  };

  return (
    <>
      <BlogLayout>
        <BlogAuthor>
          <p>Author: Jacob Clapper</p>
        </BlogAuthor>

        <BlogTitleWrapper>
          <h1>{blog.title}</h1>
        </BlogTitleWrapper>

        <BlogDate>
          <p>{dateFormat(blog.createdAt, "dddd, h:MM TT")}</p>
        </BlogDate>
      </BlogLayout>

      <BlogTextWrapper>
        {blog.text &&
          blog.text.split("|").map((line, index) => (
            <div
              key={index}
              className={index === 0 ? "first-line" : ""}
              style={line === "``" ? { color: "white" } : {}}
            >
              {index === 0 && (
                <b>
                  <span className="dropcap">{line.substring(0, 1)}</span>
                </b>
              )}
              {line.substring(1)}
            </div>
          ))}
      </BlogTextWrapper>

      {blog.video && (
        <VideoWrapper>
          <iframe
            src={`https://www.youtube.com/embed/${blog.video}`}
            title="Embedded Video"
            allowFullScreen
          ></iframe>
        </VideoWrapper>
      )}

      {blog.link && (
        <LinkWrapper>
          <a href={blog.link} target="_blank" rel="noopener noreferrer">
            {blog.link}
          </a>
        </LinkWrapper>
      )}

      {user && (
        <ButtonGroup>
          <Button variant="secondary">
            <Link to="/blog">Back</Link>
          </Button>
          <Button variant="danger" onClick={removeTheBlog}>
            Delete
          </Button>
        </ButtonGroup>
      )}
    </>
  );
};

export default ShowBlog;
