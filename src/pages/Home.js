import useFetch from "../useFetch";
import { useEffect } from "react";
import { useBlogpostsContext } from "../hooks/useBlogpostsContext";

// components
import BlogDetails from "../components/BlogpostDetails";
import BlogpostForm from "../components/BlogpostForm";
import { Container } from "@material-ui/core";

const Home = ({ setShowModal }) => {
  const { blogposts, dispatch } = useBlogpostsContext();
  const { isPending, error } = useFetch(
    "https://gentle-plateau-25780.herokuapp.com/api/blogposts/"
  );
  //   const handleDelete = (id) => {
  //     const newBlogs = blogs.filter((blog) => blog.id !== id);
  //     setBlogs(newBlogs);
  //   };

  useEffect(() => {
    const fetchBlogposts = async () => {
      const response = await fetch(
        "https://gentle-plateau-25780.herokuapp.com/api/blogposts/"
      );
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_BLOGPOSTS", payload: json });
      }
    };
    fetchBlogposts();
  }, [dispatch]);

  return (
    <Container className="home">
      <Container className="blogposts">
        {error && <div>{error}</div>}
        {isPending && <div>loading...</div>}
        {blogposts &&
          blogposts.map((blogpost) => (
            <BlogDetails
              key={blogpost._id}
              blogpost={blogpost}
              setShowModal={setShowModal}
            />
          ))}
      </Container>
      <BlogpostForm />
    </Container>
  );
};

export default Home;
