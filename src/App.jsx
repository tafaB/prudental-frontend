import Footer from "./pages/Footer"
import NavBar from "./pages/NavBar"
import Welcome from "./pages/Welcome"
import AboutSection from "./pages/AboutSection"
import ServicesSection from "./pages/ServicesSection"
import ReviewSection from "./pages/ReviewSection"
import BookingSection from "./pages/BookingSection"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Welcome />
      <AboutSection />
      <ServicesSection />
      <ReviewSection />
      <BookingSection />
      <Footer />
    </div>
  )
}

export default App
