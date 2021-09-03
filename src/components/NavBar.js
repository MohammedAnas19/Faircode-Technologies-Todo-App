import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {logout} from '../actions';

function Navbar() {
  const user = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <nav className="navbar navbar-expand-sm  navbar-dark px-sm-5">
      <ul className="navbar-nav align-items-center">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Todo App
          </Link>
        </li>
      </ul>
      
      <div className="ml-auto d-flex">
      <Link to="/completed"><i className="fas fa-check fa-2x mr-2" aria-hidden="true" style={{ color: "green" }}></i></Link>
        {user.email? (
          <Link to="#" className="mr-4 " onClick={logoutHandler}>
            <i className="fas fa-sign-out-alt fa-2x"  style={{ color: "red" }}></i>
          </Link>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}

export default Navbar;


