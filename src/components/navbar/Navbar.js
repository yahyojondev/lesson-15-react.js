import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toogleMode } from "../../context/themeSlice";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

function Navbar() {
  const users = useSelector((s) => s.users.value);
  const dispatch = useDispatch();
  let theme = useSelector((s) => s.theme.value);

  return (
    <div className="navbar">
      <h2>Redux Toolkit</h2>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/create-user"}>Create user</NavLink>
      <NavLink to={"/all-users"}>
        All users <sup>{users.length}</sup>
      </NavLink>
      <button className="darkMode__btn" onClick={() => dispatch(toogleMode())}>
        {" "}
        {theme ? (
          <MdOutlineLightMode className="light__logo" />
        ) : (
          <MdDarkMode className="dark__logo" />
        )}
      </button>
    </div>
  );
}

export default Navbar;
