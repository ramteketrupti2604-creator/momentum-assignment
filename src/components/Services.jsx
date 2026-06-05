import "../styles/services.css";

export default function Services() {
  return (
    <section className="services">

      {/* TOP CURVE */}
      <svg
        className="top-curve"
        viewBox="0 0 500 160"
        fill="none"
      >
        <path
          d="M20 120 
             C120 150, 150 20, 260 25
             C360 30, 410 90, 500 10"
          stroke="#EF4444"
          strokeWidth="2"
          fill="none"
        />

        <path
          d="M20 125 
             C120 155, 150 25, 260 30
             C360 35, 410 95, 500 15"
          stroke="#FCA5A5"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* HEADING */}
      <div className="services-heading">

        <h2>
          What we{" "}
          <span className="green-pill">
            can
          </span>

          <br />

          <span className="offer-text">
            offer
          </span>{" "}
          you!
        </h2>
      </div>

      {/* SERVICES */}
      <div className="services-list">

        {/* ROW 1 */}
        <div className="service-row">

          <div className="service-left">
            Office of multiple
            <br />
            interest content
          </div>

          <div className="service-center">
            Colaborative & partnership
          </div>

          <div className="service-arrow">
            →
          </div>
        </div>

        {/* ROW 2 */}
        <div className="service-row">

          <div className="service-left">
            The hanger US Air force
            <br />
            digital experimental
          </div>

          <div className="service-center">
            We talk about our weight
          </div>

          <div className="service-arrow">
            →
          </div>
        </div>

        {/* ROW 3 */}
        <div className="service-row">

          <div className="service-left">
            Delta faucet content,
            <br />
            social, digital
          </div>

          <div className="service-center confidence-wrapper">

            <div className="confidence-text">
              Piloting digital confidence
            </div>

            {/* ICON UNDER CONFIDENCE */}
            <div className="circle-icon">
              <span>crea</span>
            </div>

          </div>

          <div className="service-arrow">
            →
          </div>
        </div>
      </div>
    </section>
  );
}