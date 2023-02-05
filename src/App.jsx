import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Navbar />
     <Hero />
    </div>
  )
}

export default App
