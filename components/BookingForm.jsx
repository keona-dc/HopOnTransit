import "./BookingForm.css";

export default function BookingForm() {
  return (
    <section className="booking">
      <h2>Book a Ride</h2>

      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Phone" />

        <input type="text" placeholder="Pickup location" />
        <input type="text" placeholder="Drop-off location" />

        <input type="date" />
        <input type="time" />

        <textarea placeholder="Additional notes"></textarea>

        <button type="submit">Request a Ride</button>
      </form>
    </section>
  );
}
