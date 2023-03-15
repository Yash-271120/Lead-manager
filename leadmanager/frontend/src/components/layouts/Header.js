import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../features/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const authLinks = (
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      <span className="navbar-text mr-3">
        <strong>{user ? `Welcome ${user.username}  ` : ""}</strong>
      </span>
      <li className="nav-item">
        <button
          onClick={() => {
            dispatch(logoutUser());
          }}
          className="nav-link btn btn-info btn-sm text-light"
        >
          Logout
        </button>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <Link to="/register" className="nav-link">
          Register
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </li>
    </ul>
  );
  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#">
            Lead Manager
          </a>
        </div>
        {isAuthenticated ? authLinks : guestLinks}
      </div>
    </nav>
  );
};

export default Header;
