import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="center">
      <h1>404 - Page not found</h1>
      <p>The page you are looking for does not exist</p>
      <Link className="btn" to="/">Go to home</Link>
    </div>
  );
};

export default NotFound;
