import "../src/index.css";

export default function FAQ() {
  return (
    <section className="faq" id="faq">
      <div className="section-heading">
        <p className="eyebrow">FAQ</p>
        <h2>Frequently asked questions.</h2>
      </div>

      <div className="faq-list">
        <details>
          <summary>What type of transportation do you provide?</summary>
          <p>We provide safe and accessible non-emergency transportation.</p>
        </details>

        <details>
          <summary>Do you accommodate wheelchairs?</summary>
          <p>
            Yes. Our vehicle is designed to accommodate wheelchair passengers.
          </p>
        </details>

        <details>
          <summary>How do I request a ride?</summary>
          <p>You can submit our online booking form or contact us directly.</p>
        </details>

        <details>
          <summary>Do you provide emergency transportation?</summary>
          <p>No. Hop On Transit provides non-emergency transportation only.</p>
        </details>
      </div>
    </section>
  );
}
