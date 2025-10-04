import Footer from "./pages/Footer"
import NavBar from "./pages/NavBar"
import Welcome from "./pages/Welcome"
import AboutSection from "./pages/AboutSection"
import ServicesSection from "./pages/ServicesSection"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Welcome />
      <AboutSection />
      <ServicesSection />
      <Footer />
    </div>
  )
}

export default App
