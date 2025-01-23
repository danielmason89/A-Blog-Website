import { Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Copyright() {
  return (
    <Typography
      sx={{
        paddingLeft: "1rem",
      }}
    >
      {"Copyright © "}
      {new Date().getFullYear()}
    </Typography>
  );
}

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <Container
          sx={{
            paddingTop: "1rem",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Link
            to="/"
            sx={{ textDecoration: "none", color: "white", fontWeight: "600" }}
          >
            Dev Blog
          </Link>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
