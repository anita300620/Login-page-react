import { useState } from 'react'
import CreateAccount from './CreateAccount'
import WelcomeBack from './WelcomeBack'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='login'>
      <WelcomeBack />
      <CreateAccount />
    </div>
  )
}

export default App
