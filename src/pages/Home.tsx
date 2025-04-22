import useFetch from "../useFetch";
import { useEffect, useMemo } from "react";
import { useBlogpostsContext } from "../hooks/useBlogpostsContext";

// components
import BlogDetails, { type Blogpost } from "../components/BlogpostDetails";
import { Container } from "@mui/material";
import Shimmer from "../components/Shimmer";
import HeroSection from "../components/HeroSection.tsx";

interface HomeProps {
  setShowModal: (value: boolean) => void;
}

const Home = ({ setShowModal }: HomeProps) => {
  const { blogposts, dispatch } = useBlogpostsContext() as {
    blogposts: Blogpost[] | null;
    dispatch: React.Dispatch<any>;
  };

  const headers = useMemo(
  () => {
    const token = localStorage.getItem("token") || "";
    return { Authorization: `Bearer ${token}` };
  },
  []
   );
  
  const fetchUrl = "https://gentle-plateau-25780.herokuapp.com/api/blogposts";
  const { isPending, error, data } = useFetch(fetchUrl, headers);

  useEffect(() => {
    if (data) {
      dispatch({ type: "GET_BLOGPOSTS", payload: data });
    }
  }, [data, dispatch]);

  return (
    <Container className="home">
      <Container>
        <HeroSection />
      </Container>
      <Container className="blogposts">
        {error && <div>{error}</div>}
        {isPending && <Shimmer />}
        {blogposts &&
          blogposts.map((blogpost: Blogpost) => {
            const { title, author, createdAt, _id } = blogpost;
            return (
            <BlogDetails
              key={_id}
              title={title}
              author={author}
              createdAt={createdAt}
              blogpost={blogpost}
              setShowModal={setShowModal}
            />
            );
          })}
      </Container>
    </Container>
  );
};

export default Home;
