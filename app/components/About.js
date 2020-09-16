import React from "react";
import cloud from "../assets/cloud.png";
import emma from "../assets/emma2.png";
import drop from "../assets/drop2.png";

export default function About() {
  return (
    <div id="about">
      <div id="cloud">
        <div id="hello">
          <img src={cloud} />
          <p>
            Hi! My name is
            <br />
            Emma Seely-Katz.
          </p>
        </div>
        {/* <div class="drop">
          <svg viewbox="0 0 100 100">
            <path
              fill="transparent"
              stroke="#000"
              stroke-width="1.5"
              d="M15 3
           Q16.5 6.8 25 18
           A12.8 12.8 0 1 1 5 18
           Q13.5 6.8 15 3z"
            />
          </svg>
        </div>
        <div class="drop">
          <svg viewbox="0 0 8 8">
            <path
              fill="transparent"
              stroke="#000"
              stroke-width="1.5"
              d="M15 3
           Q16.5 6.8 25 18
           A12.8 12.8 0 1 1 5 18
           Q13.5 6.8 15 3z"
            />
          </svg>
        </div>
        <div class="drop">
          <svg viewbox="0 0 100 100">
            <path
              fill="transparent"
              stroke="#000"
              stroke-width="1.5"
              d="M15 3
           Q16.5 6.8 25 18
           A12.8 12.8 0 1 1 5 18
           Q13.5 6.8 15 3z"
            />
          </svg>
        </div> */}

        <img id="emma" src={emma} />
      </div>

      <div id="aboutText">
        <p id="resume">
          Check out my resume{" "}
          <a
            href="https://docs.google.com/document/d/1XyDnlVmuPcuJAW7WzRuodM9z4Hc9aKcheYQQj7tv6Go/edit"
            target="_blank"
          >
            here!
          </a>
        </p>
        <p>
          I have a BFA in sculpture and philosophy from Pratt Institute and
          graduated from Fullstack Academy's Grace Hopper program for web
          development in 2020. Ask and I'll wax poetic for you about the ways
          having a background in sculpture makes my work in engineering
          especially weird and exciting!
        </p>
        <p>
          Technical Skills: JavaScript (HTML5 + CSS), React.js/Redux, Express,
          Sequelize/PostgreSQL, Node.js, Git, Mocha/Chai, Sass/SCSS, Bootstrap,
          P5.js
        </p>
        <p>
          Artistic Skills: Drawing, painting (watercolor, oil, acrylic),
          woodworking, metalworking, ceramics, stone lithography, Adobe suite
        </p>
      </div>
    </div>
  );
}
