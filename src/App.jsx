import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import Welcome from "./components/Welcome"
import Body from "./pages/Body"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Welcome/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default App
