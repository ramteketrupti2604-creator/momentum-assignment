/* src/components/About.jsx */

import "../styles/about.css";

import about1 from "../assets/images/about-image-1.png";
import about2 from "../assets/images/about-image-2.png";

export default function About() {
  return (
    <section className="about">

      {/* TOP PINK BLUR */}
      <div className="top-blur"></div>

      {/* RED CURVE LINE */}
      <svg
        className="curve-line"
        viewBox="0 0 900 500"
        fill="none"
      >
        <path
          d="M620 120 
             C700 140, 720 220, 650 300
             C600 360, 520 360, 470 320
             C390 260, 300 250, 220 320"
          stroke="#EF4444"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M623 123 
             C703 143, 723 223, 653 303
             C603 363, 523 363, 473 323
             C393 263, 303 253, 223 323"
          stroke="#FCA5A5"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <div className="about-container">

        {/* TOP SECTION */}
        <div className="about-row top-row">

          {/* LEFT TEXT */}
          <div className="about-text">
            <h2>
              <span className="yellow-underline">
                Tomorrow should
              </span>
              <br />
              be better than{" "}
              <span className="green-pill">today</span>
            </h2>

            <p>
              We are a team of strategists, designers communicators,
              researchers. Togeather, we belive that progress only
              happens when you refuse to play things safe.
            </p>

            <a href="/">
              Read more
              <span className="read-line"></span>
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className="image-box top-image">

            <img
              src={about1}
              alt="meeting"
              className="circle-image"
            />

            {/* RED TRIANGLE */}
            <div className="triangle top-triangle"></div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="about-row bottom-row">

          {/* LEFT IMAGE */}
          <div className="image-box bottom-image">

            <img
              src={about2}
              alt="workspace"
              className="circle-image"
            />

            {/* TOP LEFT TRIANGLE */}
            <div className="triangle left-triangle"></div>

            {/* BOTTOM RIGHT TRIANGLE */}
            <div className="triangle right-triangle"></div>
          </div>

          {/* RIGHT TEXT */}
          <div className="about-text bottom-text">

            <h2>
              <span className="green-pill">See</span>{" "}
              how we can
              <br />
              help you{" "}
              <span className="yellow-underline">
                progress
              </span>
            </h2>

            <p>
              We add a layer of fearless insights and action that
              allows change makers to accelerate their progress in
              areas such as brand, design digital, comms and social
              research.
            </p>

            <a href="/">
              Read more
              <span className="read-line"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}