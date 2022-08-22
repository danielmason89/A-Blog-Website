import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>New App</h1>
      <div className="links">
        <Link to="/">home</Link>
        <Link to="/create">page</Link>
      </div>
    </nav>
  );
};

export default Navbar;
