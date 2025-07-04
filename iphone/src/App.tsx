import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <main className="bg-black px-10">
      <Navbar/>
      <Hero/>
      <Highlights />
    </main>
  )
}
export default App