import { Hero } from "./components/hero/hero";
import { Navbar } from "./components/Navbar/navbar";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";

import styles from "./App.module.css"


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className = {styles.App} >
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
    </div>
  )
}

export default App
