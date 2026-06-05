import "../styles/hero.css";

import p1 from "../assets/images/hero-person-1.png";
import p2 from "../assets/images/hero-person-2.png";
import p3 from "../assets/images/hero-person-3.png";
import p4 from "../assets/images/hero-person-4.png";
import p5 from "../assets/images/hero-person-5.png";
import p6 from "../assets/images/hero-person-6.png";
import p7 from "../assets/images/hero-person-7.png";
import p8 from "../assets/images/hero-person-8.png";

/* PURPLE SHAPE IMPORT */
import purpleShape from "../assets/images/purple-shape.png";

export default function Hero() {
  return (
    <section className="hero">

      {/* LEFT CURVE LINES */}
      <div className="left-curves">
        <svg width="90" height="220" viewBox="0 0 90 220">
          
          {/* RED DOUBLE CURVES */}
          <path
            d="M30 10 C70 40, 70 80, 30 110"
            stroke="#F87171"
            strokeWidth="3"
            fill="none"
          />

          <path
            d="M20 10 C60 40, 60 80, 20 110"
            stroke="#FCA5A5"
            strokeWidth="3"
            fill="none"
          />

          <path
            d="M30 110 C70 140, 70 180, 30 210"
            stroke="#F87171"
            strokeWidth="3"
            fill="none"
          />

          <path
            d="M20 110 C60 140, 60 180, 20 210"
            stroke="#FCA5A5"
            strokeWidth="3"
            fill="none"
          />

          {/* BLACK DOUBLE CURVES */}
          <path
            d="M55 10 C95 40, 95 80, 55 110"
            stroke="#111"
            strokeWidth="3"
            fill="none"
          />

          <path
            d="M45 10 C85 40, 85 80, 45 110"
            stroke="#111"
            strokeWidth="3"
            fill="none"
          />

          <path
            d="M55 110 C95 140, 95 180, 55 210"
            stroke="#111"
            strokeWidth="3"
            fill="none"
          />

          <path
            d="M45 110 C85 140, 85 180, 45 210"
            stroke="#111"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>

      {/* MAIN CONTENT */}
      <div className="hero-content">

        <h1 className="hero-heading">
          The <span className="yellow-line">thinkers</span> and <br />
          doers were <span className="pink-pill">changing</span>

          {/* PURPLE HALF CIRCLE IMAGE */}
          <img
            src={purpleShape}
            alt="purple-shape"
            className="purple-shape-img"
          />

          <br />
          the <span className="green-pill">status</span> Quo with
        </h1>

        <p className="hero-text">
          We are a team of strategists, designers communicators, researchers.
          Toghether,
          <br />
          we belive that progress only hghappens when you refuse to play things
          safe.
        </p>

        {/* PEOPLE IMAGES */}
        <div className="people-row">

          {/* LEFT GROUP */}
          <div className="group left-group">
            <img src={p1} alt="" className="person small down" />
            <img src={p2} alt="" className="person small up" />
          </div>

          {/* CENTER GROUP */}
          <div className="group center-group">
            <img src={p3} alt="" className="person medium up" />
            <img src={p4} alt="" className="person medium down" />
          </div>

          {/* RIGHT GROUP */}
          <div className="group right-group">
            <img src={p5} alt="" className="person medium up" />
            <img src={p6} alt="" className="person medium down" />
          </div>

          {/* LAST SINGLE */}
          <img src={p7} alt="" className="person last-person" />
          <img src={p8} alt="" className="person last-person" />

        </div>
      </div>
    </section>
  );
}