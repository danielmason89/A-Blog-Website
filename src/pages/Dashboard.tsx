import useFetch from "../useFetch.ts";
import { useEffect } from "react";
import { useBlogpostsContext } from "../hooks/useBlogpostsContext.tsx";
import { useAuthContext } from "../hooks/useAuthContext.tsx";

// components
import BlogDetails, { Blogpost } from "../components/BlogpostDetails.tsx";
import BlogpostForm from "../components/BlogpostForm.tsx";
import { Container } from "@mui/material";
import Shimmer from "../components/Shimmer.tsx";

interface DashboardProps {
  setShowModal: (value: boolean) => void;
}

const Dashboard = ({ setShowModal }: DashboardProps) => {
  const { blogposts, dispatch } = useBlogpostsContext() as {
    blogposts: Blogpost[] | null;
    dispatch: React.Dispatch<any>;
  };
  const { user } = useAuthContext();
  const { isPending, error } = useFetch(
    user ? "https://gentle-plateau-25780.herokuapp.com/api/blogposts" : "",
    {
      Authorization: `Bearer ${user?.token}`,
    }
  );

  //   const handleDelete = (id) => {
  //     const newBlogs = blogs.filter((blog) => blog.id !== id);
  //     setBlogs(newBlogs);
  //   };

  useEffect(() => {
    const fetchBlogposts = async () => {
      const response = await fetch(
        "https://gentle-plateau-25780.herokuapp.com/api/blogposts",
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_BLOGPOSTS", payload: json });
      }
    };
    if (user) {
      fetchBlogposts();
    }
  }, [dispatch, user]);

  return (
    <Container className="home">
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
      <BlogpostForm />
    </Container>
  );
};

export default Dashboard;
