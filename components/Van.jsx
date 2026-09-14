import "../src/index.css";

export default function Van() {
  return (
    <section className="van" id="van">
      <div className="section-heading">
        <p className="eyebrow">OUR VAN</p>
        <h2>Built for accessibility.</h2>
      </div>

      <div className="van-content">
        <div className="van-placeholder">
          <span>Van Photo</span>
        </div>

        <div className="van-info">
          <h3>Comfortable. Accessible. Reliable.</h3>

          <p>
            Our accessible vehicle is designed to make transportation easier and
            more comfortable for every passenger.
          </p>

          <ul>
            <li>Wheelchair accessible</li>
            <li>Accessibility ramp / lift</li>
            <li>Comfortable passenger seating</li>
            <li>Safe and secure transportation</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
