import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import BookingForm from "../components/BookingForm.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>HopOnTransit</h1>
      <p>
        Hop On Transit provides reliable, accessible van rentals that make
        getting around easier for everyone. We focus on safe, comfortable, and
        inclusive transportation that you can book quickly and with confidence.
        Whether it’s a planned trip or a last-minute need, our service is
        designed to remove barriers and give you dependable mobility when it
        matters most.
      </p>
      <BookingForm />
    </>
  );
}

export default App;
