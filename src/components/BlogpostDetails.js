// import { useNavigate, useParams } from "react-router-dom";
import { useBlogpostsContext } from "../hooks/useBlogpostsContext";
import useFetch from "../useFetch";

// date fns 
import formatDistanceToNow from "date-fns/formatDistanceToNow"

const BlogDetails = ({ blogpost }) => {
  const { dispatch } = useBlogpostsContext();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:4000/api/blogposts");

  const handleClick = async () => {
    const response = await fetch(
      "http://localhost:4000/api/blogposts/" + blogpost._id,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_BLOGPOST", payload: json });
    }
  };

  return (
    <div className="blogpost-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h3>{blogpost.title}</h3>
          <p>
            <strong>Written by {blogpost.author}</strong>
          </p>
          <p>
            <strong>{blogpost.body}</strong>
          </p>
          <p>{formatDistanceToNow(new Date(blogpost.createdAt), {addSuffix: true}) }</p>
          <span>
            <button
              aria-label="delete"
              className="material-symbols-outlined"
              onClick={handleClick}
            >
              
            </button>
          </span>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
