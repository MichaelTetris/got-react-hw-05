import css from "./Navigation.module.css";
import clsx from "clsx";

import { NavLink } from "react-router-dom";

const linkAktiveClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.linkActive);
};

const Navigation = () => {
  return (
    <div>
      <nav className={css.mainNav}>
        <NavLink className={linkAktiveClass} to="/">
          Home
        </NavLink>
        <NavLink className={linkAktiveClass} to="/movies">
          Movies
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
