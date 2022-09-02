import { useState } from "react";
import { useBlogpostsContext } from "../hooks/useBlogpostsContext";
import { Button, Typography, TextField } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import { useAuthContext } from "../hooks/useAuthContext";

// import { useNavigate } from "react-router-dom";

const BlogpostForm = () => {
  const { dispatch } = useBlogpostsContext();
  const { user } = useAuthContext();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [IsPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setError("You must be logged in");
      return;
    }
    const blogpost = { title, body, author };

    setIsPending(true);
    const response = await fetch(
      "https://gentle-plateau-25780.herokuapp.com/api/blogposts",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        Authorization: `Bearer ${user.token}`,
        body: JSON.stringify(blogpost),
      }
    );

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
      <Typography variant="h5">Add a New Blogpost</Typography>
      <form onSubmit={handleSubmit}>
        <div className="textfield-container">
          <TextField
            color="secondary"
            variant="outlined"
            type="text"
            value={title}
            label="Title"
            onChange={(e) => setTitle(e.target.value)}
            className={emptyFields.includes("title") ? "error" : ""}
          />
          <TextField
            color="secondary"
            label="Author"
            type="text"
            variant="outlined"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className={emptyFields.includes("author") ? "error" : ""}
          />
        </div>
        <TextField
          color="secondary"
          value={body}
          fullWidth
          variant="outlined"
          label="Blogpost"
          multiline
          minRows={4}
          onChange={(e) => setBody(e.target.value)}
          className={emptyFields.includes("body") ? "error" : ""}
        />
        {!IsPending && (
          <Button type="submit" color="secondary" variant="contained">
            <AddIcon fontSize="small" />
            Add Blogpost
          </Button>
        )}
        {error && <div className="error">{error}</div>}
        {IsPending && (
          <Button color="secondary" variant="outlined" disabled>
            Adding Blogpost...
          </Button>
        )}
      </form>
    </div>
  );
};

export default BlogpostForm;
