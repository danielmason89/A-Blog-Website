import useFetch from "../useFetch";
import { useEffect } from "react";
import { useBlogpostsContext } from "../hooks/useBlogpostsContext";

// components
import BlogDetails from "../components/BlogpostDetails";
import BlogpostForm from "../components/BlogpostForm";

const Home = () => {
  const { blogposts, dispatch } = useBlogpostsContext();
  const { isPending, error } = useFetch(
    "https://gentle-plateau-25780.herokuapp.com/api/blogposts"
  );
  //   const handleDelete = (id) => {
  //     const newBlogs = blogs.filter((blog) => blog.id !== id);
  //     setBlogs(newBlogs);
  //   };

  useEffect(() => {
    const fetchBlogposts = async () => {
      const response = await fetch(
        "https://gentle-plateau-25780.herokuapp.com/api/blogposts"
      );
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_BLOGPOSTS", payload: json });
      }
    };
    fetchBlogposts();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="blogposts">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {blogposts &&
          blogposts.map((blogpost) => (
            <BlogDetails key={blogpost._id} blogpost={blogpost} />
          ))}
      </div>
      <BlogpostForm />
    </div>
  );
};

/* <BlogList
            blogs={blogs}
            title="All Blogs!"
            //   handleDelete={handleDelete}
          /> */

export default Home;
