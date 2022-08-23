import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>Personal Blog</h1>
      </Link>
      <div className="links">
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
