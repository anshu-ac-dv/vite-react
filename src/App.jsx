import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Header } from './Header'


function Button(){
  return <button>Click Me</button>
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <h1>Vite + React</h1>
      <Button />
    </div>
  )
}

export default App
