import { useState, useEffect } from "react";
import { getAllBlogs } from "../api/blog";
import dateFormat from "dateformat";
import messages from "./shared/AutoDismissAlert/messages";
import LoadingScreen from "./shared/LoadingScreen";

import {
  BlogContainer,
  BlogHeader,
  BlogGrid,
  BlogCard,
  BlogCardHeader,
  BlogTitle,
  BlogDate,
  BlogText,
  ReadMoreButton,
} from "./Blog.styles";

const Blog = ({ updatedBlogs, msgAlert }) => {
  const [blogs, setBlogs] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getAllBlogs()
      .then((res) => setBlogs(res.data.blogs))
      .catch((err) => {
        msgAlert({
          heading: "Error Getting Blog",
          message: messages.getSongsFailure,
          variant: "danger",
        });
        setError(true);
      });
  }, [updatedBlogs]);

  if (error) return <p>Error loading blog posts.</p>;
  if (!blogs) return <LoadingScreen />;
  if (blogs.length === 0) return <p>No blogs yet. Check again soon.</p>;

  return (
    <BlogContainer>
      <BlogHeader>Blog</BlogHeader>
      <BlogGrid>
        {blogs.map((blog) => (
          <BlogCard key={blog._id}>
            <BlogCardHeader>
              <BlogTitle>{blog.title}</BlogTitle>
              <BlogDate>{dateFormat(blog.date, "mmmm dS, yyyy")}</BlogDate>
            </BlogCardHeader>
            <BlogText>{blog.text.slice(0, 150)}...</BlogText>
            <ReadMoreButton to={`/blog/${blog._id}`}>
              Continue Reading
            </ReadMoreButton>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogContainer>
  );
};

export default Blog;
