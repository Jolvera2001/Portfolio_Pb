import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import NavBar from "./components/Navbar"
import Portfolio from "./components/Portfolio"

function App() {

  return (
    <>
      <div className="w-full h-full bg-zinc-900 text-text-color space-y-10 font-nunito overflow-auto text-md">
        <NavBar />
        <Hero />
        <Portfolio />
        <Experience />
        <Contact />
      </div>
    </>
  )
}

export default App
