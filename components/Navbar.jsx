import "../src/index.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="logo">
        Hop On Transit
      </a>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#van">Our Van</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact</a>
      </div>

      <a href="#booking" className="nav-button">
        Book a Ride
      </a>
    </nav>
  );
}
