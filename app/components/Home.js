import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="main" id="home">
      <div className="title">
        Hi, I'm Emma. Welcome to my corner of the world!
      </div>
      <p>
        This site is growing every day, my <Link to={"/about"}>About Page</Link>{" "}
        is a good place to start!
        <br />
        <br />
        You can check out my resume{" "}
        <a href="https://docs.google.com/document/d/1XyDnlVmuPcuJAW7WzRuodM9z4Hc9aKcheYQQj7tv6Go/edit">
          here.
        </a>
      </p>
      <img src="https://static01.nyt.com/images/2019/07/25/fashion/XX-plantlife-sprout1/XX-plantlife-sprout1-jumbo-v3.gif" />
    </div>
  );
}
