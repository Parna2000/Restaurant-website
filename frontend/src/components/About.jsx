import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we are serious about is food.</p>
          </div>
          <p className="mid">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            quam quas sint omnis fugit. Dolore sed obcaecati inventore, ipsam
            dolorem ut rerum beatae omnis excepturi deserunt voluptatem totam
            blanditiis a iure molestias, at assumenda qui unde culpa! Labore
            velit vero vitae. Aperiam eveniet eius ad? Molestias quaerat maiores
            ut odit!
          </p>
          <Link to={"/"}>
            Explore Menu{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="./about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
