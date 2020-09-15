import React from "react";
import hr from "../assets/hr.png";
export default function Solo() {
  return (
    <div className="teamSolo">
      <div className="title">Solo Projects</div>
      <div className="projects">
        <div className="project">
          <a href="https://github.com/emseely/stackathonNew" target="_blank">
            Harm Reduction Stackathon
          </a>
          <p>August 2020</p>
          <img id="hr" src={hr} />
          <p>
            An in-development Progressive Web App intended to assist in the
            safer use of substances.
          </p>
        </div>
      </div>
    </div>
  );
}
