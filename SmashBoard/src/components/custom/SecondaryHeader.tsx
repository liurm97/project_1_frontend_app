import { NavLink, Outlet } from "react-router-dom";
import MainLogo from "../../assets/icon_white_bg.svg";

export const SecondaryHeader = () => {
  return (
    <>
      {/* Centered - Icon + Heading */}
      <div className="header-container">
        <NavLink to="/" className="header-heading">
          <img
            className="smash-icon-landing"
            src={MainLogo}
            alt="Badminton jump shot icon"
            aria-label="Badminton jump shot icon"
          />
          <h1 className="header-heading-h1">SmashBoard</h1>
        </NavLink>
      </div>

      <main>
        <Outlet />
      </main>
    </>
  );
};
