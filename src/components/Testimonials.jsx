import "../styles/testimonials.css";

import c1 from "../assets/images/customer-1.png";
import c2 from "../assets/images/customer-2.png";
import c3 from "../assets/images/customer-3.png";
import c5 from "../assets/images/customer-5.png";
import c6 from "../assets/images/customer-6.png";
import c7 from "../assets/images/customer-7.png";
import c8 from "../assets/images/customer-8.png";
import c9 from "../assets/images/customer-9.png";

export default function Testimonials() {
  return (
    <section className="testimonials">

      {/* HEADING */}
      <div className="testimonial-heading">
        <h2>
          What our customer
          <br />
          says <span className="yellow-line">About Us</span>
        </h2>
      </div>

      {/* LEFT SMALL IMAGES */}
      <img src={c1} alt="" className="small-img left-top" />
      <img src={c2} alt="" className="small-img left-mid" />
      <img src={c3} alt="" className="small-img left-bottom" />

      {/* RIGHT SMALL IMAGES */}
      <img src={c5} alt="" className="small-img right-top" />
      <img src={c6} alt="" className="small-img right-mid" />
      <img src={c7} alt="" className="small-img right-center" />

      {/* BIG IMAGES */}
      <img src={c8} alt="" className="big-img left-big" />
      <img src={c9} alt="" className="big-img right-big" />

      {/* REVIEW CARD */}
      <div className="review-card">

        <span className="quote left-quote">“</span>

        <p>
          Elementum delivered the site with inthe timeline
          as they requested. Inthe end, the client found a 50%
          increase in traffic within days since its launch. They
          also had an impressive ability to use technologies that
          the company hasn't used, which have also proved to
          be easy to use and reliable
        </p>

        <span className="quote right-quote">”</span>

      </div>

    </section>
  );
}