import { Hero } from "./components/hero/hero";
import { Navbar } from "./components/Navbar/navbar";
import { About } from "./components/About/About";

import styles from "./App.module.css"


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className = {styles.App} >
      <Navbar/>
      <Hero/>
      <About/>
    </div>
  )
}

export default App
