import "../src/index.css";

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="section-heading">
        <p className="eyebrow">OUR SERVICES</p>
        <h2>Transportation made accessible.</h2>
      </div>

      <div className="service-grid">
        <article className="service-card">
          <span className="service-number">01</span>
          <h3>Wheelchair Accessible</h3>
          <p>
            Accessible transportation designed to comfortably accommodate
            wheelchair passengers.
          </p>
        </article>

        <article className="service-card">
          <span className="service-number">02</span>
          <h3>Non-Emergency Rides</h3>
          <p>
            Reliable transportation for appointments, programs, and everyday
            destinations.
          </p>
        </article>

        <article className="service-card">
          <span className="service-number">03</span>
          <h3>Comfortable Travel</h3>
          <p>
            A professional and welcoming experience from pickup to drop-off.
          </p>
        </article>
      </div>
    </section>
  );
}
