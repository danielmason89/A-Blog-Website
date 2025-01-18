import { Navigate, useSearchParams } from "react-router-dom";

const AuthorizedRoute = ({ children }) => {
  const [searchParams] = useSearchParams();
  const secretKey = process.env.REACT_APP_AUTH_KEY;
  const key = searchParams.get("key");

  if (key !== secretKey) {
    return <Navigate to="/" />;
  }
  return children;
};

export default AuthorizedRoute;
