import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="main" id="home">
      <div className="title">
        Hi, I'm Emma. Welcome to my corner of the world!
      </div>
      <div>
        <p>
          This site is still growing, but my{" "}
          <Link to={"/about"}>About Page</Link> is a great place to start.
        </p>
        <p>
          You can check out my resume{" "}
          <a
            href="https://docs.google.com/document/d/1XyDnlVmuPcuJAW7WzRuodM9z4Hc9aKcheYQQj7tv6Go/edit"
            target="_blank"
          >
            here.
          </a>
        </p>
        <p>
          I'd love to hear from you! Reach me at{" "}
          <a href="mailto:emseely@gmail.com">emseely@gmail.com</a>
        </p>
      </div>

      <img src="https://static01.nyt.com/images/2019/07/25/fashion/XX-plantlife-sprout1/XX-plantlife-sprout1-jumbo-v3.gif" />
    </div>
  );
}
