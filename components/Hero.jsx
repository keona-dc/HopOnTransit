import "../src/index.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">SAFE • RELIABLE • ACCESSIBLE</p>

        <h1>Transportation that gets you there.</h1>

        <p className="hero-text">
          Hop On Transit provides safe, comfortable, and accessible
          non-emergency transportation for the people who need it most.
        </p>

        <div className="hero-actions">
          <a href="#booking" className="primary-button">
            Request a Ride
          </a>

          <a href="#contact" className="secondary-button">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
