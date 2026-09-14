import "../src/index.css";

export default function BookingForm() {
  return (
    <section className="booking" id="booking">
      <div className="section-heading">
        <p className="eyebrow">BOOKING</p>
        <h2>Request a ride.</h2>
        <p>Complete the form below and we'll get in touch with you.</p>
      </div>

      <form className="booking-form">
        <div className="form-row">
          <label>
            Passenger Name
            <input type="text" name="name" />
          </label>

          <label>
            Phone Number
            <input type="tel" name="phone" />
          </label>
        </div>

        <div className="form-row">
          <label>
            Pickup Location
            <input type="text" name="pickup" />
          </label>

          <label>
            Drop-off Location
            <input type="text" name="dropoff" />
          </label>
        </div>

        <div className="form-row">
          <label>
            Date
            <input type="date" name="date" />
          </label>

          <label>
            Time
            <input type="time" name="time" />
          </label>
        </div>

        <div className="form-row">
          <label>
            Number of Passengers
            <input type="number" name="passengers" min="1" />
          </label>

          <label>
            Wheelchair Requirements
            <select name="wheelchair">
              <option value="">Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
        </div>

        <label>
          Purpose of Transportation
          <input type="text" name="purpose" />
        </label>

        <label>
          Additional Notes
          <textarea name="notes" rows="4"></textarea>
        </label>

        <button type="submit" className="primary-button">
          Request Ride
        </button>

        <p className="form-note">
          Hop On Transit provides non-emergency transportation only.
        </p>
      </form>
    </section>
  );
}
