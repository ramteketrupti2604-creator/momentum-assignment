import "../styles/newsletter.css";
import purpleShape from "../assets/images/purple-shape1.png";

export default function Newsletter() {
  return (
    <section className="newsletter">

      {/* TOP RED CURVE */}
      <svg
        className="top-curve"
        width="140"
        height="80"
        viewBox="0 0 140 80"
        fill="none"
      >
        <path
          d="M10 60 C40 10, 80 10, 100 40"
          stroke="#FCA5A5"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M40 70 C70 20, 110 20, 130 50"
          stroke="#F87171"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* PURPLE SHAPE */}
      <img
        src={purpleShape}
        alt="purple-shape"
        className="purple-shape-news"
      />

      {/* CONTENT */}
      <div className="newsletter-content">

        <h2>
          Subscribe to
          <br />
          our newsletter
        </h2>

        <p>
          To make your stay special and even more memorable
        </p>

        <button>Subscribe Now</button>

      </div>

      {/* DIVIDER */}
      <div className="newsletter-line"></div>

      {/* FOOTER LINKS */}
      <div className="newsletter-footer">

        <div className="footer-column">
          <h4>Company</h4>
          <a href="#">Home</a>
          <a href="#">Studio</a>
          <a href="#">Service</a>
          <a href="#">Blog</a>
        </div>

        <div className="footer-column">
          <h4>Terms & Policies</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Explore</a>
          <a href="#">Accesibility</a>
        </div>

        <div className="footer-column">
          <h4>Follow Us</h4>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">Youtube</a>
          <a href="#">Twitter</a>
        </div>

        <div className="footer-column">
          <h4>Terms & Policies</h4>

          <p>
            1499W Fulton st6, STE
            <br />
            2D Chicago, IL 60607
          </p>

          <p>(123) 456789000</p>

          <p>info@elementum.com</p>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="copyright">
        ©2023 Elementum. All rights reserved
      </div>

    </section>
  );
}