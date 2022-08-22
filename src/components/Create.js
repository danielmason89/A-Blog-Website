import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [IsPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const thingy = { title, body, author };

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(thingy),
    }).then(() => {
      console.log("new thingy add");
      setIsPending(false);
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a new Thingy</h2>
      <form onSubmit={handleSubmit}>
        <label>Thingy title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Thingy body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Thingy author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="marion">mario</option>
          <option value="mario1">mario1</option>
        </select>
        {!IsPending && <button>Add Thingy</button>}
        {IsPending && <button disabled>Adding Thingy...</button>}
      </form>
    </div>
  );
};

export default Create;
