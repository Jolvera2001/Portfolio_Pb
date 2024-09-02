import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import NavBar from "./components/Navbar"
import Portfolio from "./components/Portfolio"

function App() {

  return (
    <>
      <div className="w-full h-full bg-zinc-900 text-text-color space-y-4 font-nunito overflow-auto text-md">
        <NavBar />
        <Hero />
        <Experience />
        <Portfolio />
        <Contact />
      </div>
    </>
  )
}

export default App
