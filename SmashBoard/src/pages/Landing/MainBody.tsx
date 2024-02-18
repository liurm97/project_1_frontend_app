import { Link } from "react-router-dom";

export const MainBody = () => {
  return (
    <div className="body-container">
      <div className="body-text">Badminton fans out there!</div>
      <div className="body-text">
        Keen to find out more about the latest BWF World Rankings?
      </div>
      <div className="body-text">What are you waiting for?</div>
      <Link to="/filter" className="destructive-btn">
        Go
      </Link>
    </div>
  );
};
