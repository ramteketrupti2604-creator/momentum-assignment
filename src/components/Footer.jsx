import "../styles/footer.css"

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Column 1 */}

        <div className="footer-column">

          <h3>Company</h3>

          <ul>
            <li>About</li>
            <li>Studio</li>
            <li>Service</li>
            <li>Blog</li>
          </ul>

        </div>

        {/* Column 2 */}

        <div className="footer-column">

          <h3>Terms & Policies</h3>

          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Cookies</li>
            <li>Accessibility</li>
          </ul>

        </div>

        {/* Column 3 */}

        <div className="footer-column">

          <h3>Follow Us</h3>

          <ul>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>YouTube</li>
            <li>Twitter</li>
          </ul>

        </div>

        {/* Column 4 */}

        <div className="footer-column">

          <h3>Contact</h3>

          <ul>
            <li>123 Business Street</li>
            <li>Mumbai, India</li>
            <li>+91 9876543210</li>
            <li>hello@momentum.com</li>
          </ul>

        </div>

      </div>

      {/* Bottom Footer */}

      <div className="footer-bottom">

        <p>
          ©2025 Momentum. All rights reserved.
        </p>

      </div>

    </footer>
  )
}

export default Footer

