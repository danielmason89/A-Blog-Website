import { useState } from "react";
import { useSubscribe } from "../hooks/useSubscribe";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { subscribe, error, isLoading } = useSubscribe();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await subscribe(email, password);

    await fetch(
      "https://gentle-plateau-25780.herokuapp.com/api/user/subscribe",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Subscribe</h3>
      <label>Email:</label>
      <input
        type="email"
        autoComplete="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      />
      <label>Password:</label>
      <input
        type="password"
        autoComplete="current-password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
      />
      <button disabled={isLoading}>Subscribe</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Subscribe;
