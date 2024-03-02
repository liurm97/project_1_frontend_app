import Icon from "@mdi/react";
import { mdiGithub } from "@mdi/js";
import { Link, NavLink, Outlet } from "react-router-dom";
import MainLogo from "../../assets/icon_white_bg.svg";

export const MainHeader = () => {
  return (
    <>
      {/* Icon + Heading */}
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

        {/* About + FAQ Links */}
        <div className="header-links">
          <NavLink className="header-link" to="/about">
            About
          </NavLink>
          <NavLink className="header-link" to="/faq">
            FAQ
          </NavLink>
        </div>

        {/* Link to Github Project Repo */}
        <div className="header-icons">
          <Link
            target="blank"
            to="https://github.com/liurm97/project_1_frontend_app"
          >
            <Icon path={mdiGithub} size={1} color={"#fff"} />
          </Link>
        </div>
      </div>

      {/* Sharing the same MainHeader */}
      <main className="p-8">
        <Outlet />
      </main>
    </>
  );
};
