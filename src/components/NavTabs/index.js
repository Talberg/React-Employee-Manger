import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/allemployees" className={location.pathname === "/allemployees" ? "nav-link active" : "nav-link"}>
          All Employees
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/frontend"
          className={location.pathname === "/frontend" ? "nav-link active" : "nav-link"}
        >
          Frontend Team
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/backend"
          className={location.pathname === "/backend" ? "nav-link active" : "nav-link"}
        >
          Backend Team
        </Link>
      </li>
      
    </ul>
  );
}

export default NavTabs;
