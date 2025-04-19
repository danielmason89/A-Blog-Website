import { Button, Container, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import { useLogout } from "../hooks/useLogout.tsx";
import { useAuthContext } from "../hooks/useAuthContext.tsx";
import { Link } from "react-router-dom";

interface SideBarProps {
  toggleSideBar: () => void;
}

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

const SideBar = ({ toggleSideBar }: SideBarProps) => {
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
                gap: 1,
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
              <Link
                to="/dashboard"
                style={{
                  paddingRight: "1rem",
                  display: "block",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                Dashboard
              </Link>
              <Button
                onClick={handleClick}
                color="secondary"
                variant="outlined"
                to="/"
                component={Link}
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
              gap: 1,
            }}
          >
            {!user && (
              <>
                <Link
                  to="/login"
                  style={{
                    paddingRight: "1rem",
                    display: "block",
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  Login
                </Link>
                <Link
                  to="/subscribe"
                  style={{
                    paddingRight: "1rem",
                    display: "block",
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  Subscribe
                </Link>
              </>
            )}
            <Button
              onClick={toggleSideBar}
              color="secondary"
              variant="contained"
            >
              Close
            </Button>
          </Container>
        )}
      </motion.div>
    </nav>
  );
};

export default SideBar;
