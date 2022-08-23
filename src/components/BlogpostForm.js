import { useState } from "react";
import { useBlogpostsContext } from "../hooks/useBlogpostsContext";
// import { useNavigate } from "react-router-dom";

const BlogpostForm = () => {
  const { dispatch } = useBlogpostsContext();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [IsPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blogpost = { title, body, author };

    setIsPending(true);
    const response = await fetch("http://localhost:4000/api/blogposts", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blogpost),
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setTitle("");
      setBody("");
      setAuthor("");
      setError(null);
      setEmptyFields([]);
      console.log("new blogpost added", json);
      dispatch({ type: "CREATE_BLOGPOST", payload: json });
      setIsPending(false);
    }
  };

  return (
    <div className="create">
      <h2>Add a New Blogpost</h2>
      <form className="" onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className={emptyFields.includes("title") ? "error" : ""}
        />
        <label>Body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          className={emptyFields.includes("body") ? "error" : ""}
        ></textarea>
        <label>Author:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          className={emptyFields.includes("author") ? "error" : ""}
        />
        {!IsPending && <button>Add Blogpost</button>}
        {error && <div className="error">{error}</div>}
        {IsPending && <button disabled>Adding Blogpost...</button>}
      </form>
    </div>
  );
};

export default BlogpostForm;
