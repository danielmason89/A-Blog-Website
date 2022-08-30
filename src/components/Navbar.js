import { Avatar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import avatar from "../images/profile-image.jpg";
import { format } from "date-fns";
import { motion } from "framer-motion";

const leftNavVariants = {
  hidden: {
    x: -550,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.25,
      type: "spring",
      mass: 0.4,
      damping: 8,
      stiffness: 90,
      staggerDirection: -1,
    },
  },
};

const rightNavVariants = {
  hidden: {
    x: 550,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.25,
      type: "spring",
      mass: 0.4,
      damping: 8,
      stiffness: 90,
      staggerDirection: -1,
    },
  },
};

const imgVariant = {
  hidden: { opacity: 0, y: -200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.25,
    },
  },
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <motion.div variants={imgVariant} initial="hidden" animate="visible">
        <Avatar id="avatar" alt="Daniel Mason" src={avatar} />
      </motion.div>
      <motion.div variants={leftNavVariants} initial="hidden" animate="visible">
        <Link to="/">
          <Typography variant="h1">
            A Developer's Blog by Daniel Mason
          </Typography>
        </Link>
        <Typography variant="subtitle1" className="date">
          A space for helping others in tech.
        </Typography>
        <Typography variant="subtitle1" className="date">
          Today's date is {format(new Date(), "MMMM do Y")}.
        </Typography>
      </motion.div>
      <motion.div
        className="links"
        variants={rightNavVariants}
        initial="hidden"
        animate="visible"
      >
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/about">About</Link>
      </motion.div>
    </nav>
  );
};

export default Navbar;
