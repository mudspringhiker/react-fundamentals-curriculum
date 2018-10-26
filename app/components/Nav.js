import React from "react";
const { NavLink } = require("react-router-dom");

const Nav = () => {
  return (
    <ul className="nav">
      <li>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/result">
          Result
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
