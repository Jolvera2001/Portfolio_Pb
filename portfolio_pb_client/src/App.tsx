import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Portfolio from "./components/Portfolio"

function App() {

  return (
    <>
      <div className="w-screen h-screen bg-slate-700 space-y-4">
        <Hero />
        <Experience />
        <Portfolio />
        <Contact />
      </div>
    </>
  )
}

export default App
