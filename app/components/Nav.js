import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav>
      <div>
        <Link to={"/"}>Home</Link>
      </div>
      <div>
        <div className="navDropdown">
          <div className="navDropButton">Work</div>
          <div className="navDropContent">
            <Link to="/team">Team</Link>
            <Link to="/solo">Solo</Link>
            <Link to="/design">Design</Link>
          </div>
        </div>
        <Link to={"/offline"}>Offline</Link>
        <Link to="/entries">Blog</Link>
        <Link to={"/about"}>About</Link>
      </div>
    </nav>
  );
}
