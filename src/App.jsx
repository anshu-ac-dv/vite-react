import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Header, Home} from './Header'
import { Form } from './StyledForm'

function App() {

  return (
    <div className="App">
      <h1>Welcome to React App</h1>
      <Form />
    </div>
  )
}

export default App
