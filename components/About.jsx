import "../src/index.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="section-heading">
        <p className="eyebrow">ABOUT US</p>
        <h2>Moving people with care.</h2>
      </div>

      <div className="about-content">
        <p>
          Hop On Transit provides dependable non-emergency transportation
          designed around comfort, accessibility, and peace of mind.
        </p>

        <p>
          Whether you need transportation to an appointment, program, or other
          destination, our goal is to make every ride simple and comfortable.
        </p>
      </div>
    </section>
  );
}
