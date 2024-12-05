import { Hero } from "./components/hero/hero";
import { Navbar } from "./components/Navbar/navbar";

import styles from "./App.module.css"


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className = {styles.App} >
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App
