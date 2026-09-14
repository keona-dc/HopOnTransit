import "./App.css";

import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Services from "../components/Services.jsx";
import Van from "../components/Van.jsx";
import BookingForm from "../components/BookingForm.jsx";
import FAQ from "../components/FAQ.jsx";
import Contact from "../components/Contact.jsx";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Van />
        <BookingForm />
        <FAQ />
        <Contact />
      </main>
    </>
  );
}

export default App;
