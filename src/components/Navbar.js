import { useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import avatar from "../images/profile-image.jpg";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import SideBar from "./SideBar";

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
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md"));
  const [isSideBarVisible, setIsSideBarVisible] = useState(false);

  const handleClick = () => {
    logout();
  };

  function toggleSideBar() {
    setIsSideBarVisible(!isSideBarVisible);
  }

  useEffect(() => {
    if (!isMobileOrTablet && isSideBarVisible) {
      setIsSideBarVisible(false);
    }
  }, [isMobileOrTablet, isSideBarVisible]);

  return (
    <nav className="navbar">
      <div
        style={{ display: "flex", alignItems: "center", paddingRight: "1rem" }}
      >
        <motion.div variants={imgVariant} initial="hidden" animate="visible">
          <Avatar
            id="avatar"
            alt="A portrait image of Daniel Mason"
            src={avatar}
          />
        </motion.div>
        <motion.div
          variants={leftNavVariants}
          initial="hidden"
          animate="visible"
          style={{ paddingLeft: "1.25rem" }}
        >
          <Typography variant="h1">A Developer's Blog</Typography>

          <Typography variant="subtitle1" className="date">
            A space for helping others in the tech industry.
          </Typography>
          <Typography variant="subtitle1" className="date">
            {format(new Date(), "MMMM do Y")}
          </Typography>
        </motion.div>
      </div>
      <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
        <motion.div
          className="links"
          variants={rightNavVariants}
          initial="hidden"
          animate="visible"
        >
          {user && (
            <Container>
              <span
                style={{
                  fontWeight: "600",
                  color: "white",
                  opacity: "0.8",
                }}
              >
                {user.email}
              </span>
              <Link to="/dashboard" style={{ paddingRight: "1.25rem" }}>
                Dashboard
              </Link>
              <Button
                onClick={handleClick}
                color="secondary"
                variant="outlined"
                to="/"
              >
                Logout
              </Button>
            </Container>
          )}
          {!user && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/subscribe">Subscribe</Link>
              <Link to="/">Home</Link>
            </>
          )}
        </motion.div>
      </Box>
      {isMobileOrTablet && !isSideBarVisible && (
        <Button
          color="secondary"
          variant="contained"
          onClick={toggleSideBar}
          sx={{ display: { xs: "block", sm: "block", md: "none" } }}
        >
          <div
            style={{
              height: "1.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{ backgroundColor: "black", width: 35, height: 3 }}
            ></div>
            <div
              style={{ backgroundColor: "black", width: 35, height: 3 }}
            ></div>
            <div
              style={{ backgroundColor: "black", width: 35, height: 3 }}
            ></div>
          </div>
        </Button>
      )}
      {isMobileOrTablet && isSideBarVisible && (
        <SideBar toggleSideBar={toggleSideBar} />
      )}
    </nav>
  );
};

export default Navbar;
