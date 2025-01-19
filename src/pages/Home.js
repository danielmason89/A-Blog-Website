import useFetch from "../useFetch";
import { useEffect } from "react";
import { useBlogpostsContext } from "../hooks/useBlogpostsContext";

// components
import BlogDetails from "../components/BlogpostDetails";
import { Container } from "@mui/material";
import Shimmer from "../components/Shimmer";

const Home = ({ setShowModal }) => {
  const { blogposts, dispatch } = useBlogpostsContext();

  const fetchUrl = "https://gentle-plateau-25780.herokuapp.com/api/blogposts";

  const { isPending, error, data } = useFetch(fetchUrl);

  // Update the global context when the data changes
  useEffect(() => {
    if (data) {
      dispatch({ type: "GET_BLOGPOSTS", payload: data });
    }
  }, [data, dispatch]);

  return (
    <Container className="home">
      <Container className="blogposts">
        {error && <div>{error}</div>}
        {isPending && <Shimmer />}
        {blogposts &&
          blogposts.map((blogpost) => (
            <BlogDetails
              key={blogpost._id}
              blogpost={blogpost}
              setShowModal={setShowModal}
            />
          ))}
      </Container>
    </Container>
  );
};

export default Home;
