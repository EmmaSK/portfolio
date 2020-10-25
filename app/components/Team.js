import React from "react";
import elemental from "../assets/elemental.png";
import rat from "../assets/rat.png";
import mint from "../assets/encouragemint.png";
export default function Team() {
  return (
    <div className="teamSolo">
      <div className="title">Team Projects</div>
      <div className="projects">
        <div className="project">
          <a href="https://ratshop.herokuapp.com/" target="_blank">
            Rat Shopper
          </a>
          <p>August 2020</p>
          <img id="rat" src={rat} />
          <p>
            A fully functioning ecommerce app for an imaginary business selling
            pet rats and rat accessories.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/2006-ghp-capstone-team-c/capstone"
            target="_blank"
          >
            Elemental Health
          </a>
          <p>September 2020</p>
          <img src={elemental} />
          <p>
            A patient-focused Progressive Web App to collect, visualize, and
            share users’ healthcare stories.
          </p>
        </div>

        <div className="project">
          <a
            href="https://github.com/tech-support-ELC/EncourageMINT"
            target="_blank"
          >
            EncourageMINT
          </a>
          <p>October 2020</p>
          <img id="mint" src={mint} />
          <p>
            A safe space where people affected by breast cancer can support each
            other. Finalist in Estée Lauder Hackathon 2020
          </p>
        </div>
      </div>
    </div>
  );
}
