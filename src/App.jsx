import Footer from "./pages/Footer"
import NavBar from "./pages/NavBar"
import Welcome from "./pages/Welcome"
import AboutSection from "./pages/AboutSection"
import ServicesSection from "./pages/ServicesSection"
import ReviewSection from "./pages/ReviewSection"
import BookingSection from "./pages/BookingSection"
import { useEffect } from "react"
import Aos from "aos"
import 'aos/dist/aos.css'; 

function App() {
  useEffect(() => {
    Aos.init({once: true, duration: 800});
  }, []);
  return (
    <div className="w-full overflow-x-hidden">
      <div className="App">
        <NavBar />
        <Welcome />
        <AboutSection />
        <ServicesSection />
        <ReviewSection />
        <BookingSection />
        <Footer />
      </div>
    </div>
  )
}

export default App