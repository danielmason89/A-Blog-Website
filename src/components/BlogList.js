import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <Grid item sm={4} xs={4} lg={12} className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>{blog.author}</p>
          </Link>
        </div>
      ))}
    </Grid>
  );
};

export default BlogList;
