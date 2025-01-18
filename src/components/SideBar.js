import { Button, Container, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

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

const SideBar = ({ toggleSideBar }) => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <nav className="sidebar">
      <motion.div
        className="links"
        variants={rightNavVariants}
        initial="hidden"
        animate="visible"
      >
        {user ? (
          <Container
            disableGutters
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                pl: 0,
                mt: 1,
              }}
            >
              <Typography
                style={{
                  fontWeight: "600",
                  color: "white",
                  opacity: "0.8",
                }}
              >
                {user.email}
              </Typography>
              <Button
                to="/"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                color="secondary"
              >
                Home
              </Button>
              <Button
                onClick={handleClick}
                color="secondary"
                variant="outlined"
              >
                Logout
              </Button>
              <Button
                onClick={toggleSideBar}
                color="secondary"
                variant="contained"
              >
                Close
              </Button>
            </Box>
          </Container>
        ) : (
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Login
            </Link>
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Signup
            </Link>
          </Container>
        )}
      </motion.div>
    </nav>
  );
};

export default SideBar;
