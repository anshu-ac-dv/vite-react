import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Header, Home} from './Header'
import { Form } from './StyledForm'
import { Welcome } from './Welcome'
import { CandidateProfile } from './CandidateProfile'
import { Greeting } from './Gretting'
import { CardWrapper } from './CardWrapper'
import { UserDetails } from './UserDetails'
import { ProductList } from './ProductList'
import { NameList } from './NameList'

function App() {

  return (
    <div className="App">
      <NameList />
      < ProductList />
      <UserDetails name="Anshu" isOnline={true} />
      <UserDetails name="John" isOnline={false} hideOffline={false} />
      <CardWrapper title="Card Wrapper Component"/>
      <Greeting name="Anshu" messages="Welcome to React App"/>
      <Welcome name="Anshu" age="25" location="India"/>
      <h1>Welcome to React App</h1>
      <Form />
      <CandidateProfile />
    </div>
  )
}

export default App
