import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Header, Home} from './Header'
import { Form } from './StyledForm'
import { Welcome } from './Welcome'
import { CandidateProfile } from './CandidateProfile'

function App() {

  return (
    <div className="App">
      <Welcome name="Anshu" />
      <h1>Welcome to React App</h1>
      <Form />
      <CandidateProfile />
    </div>
  )
}

export default App
