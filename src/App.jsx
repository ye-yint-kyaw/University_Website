import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { MainRouter } from './MainRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <MainRouter/>
    </BrowserRouter>
  )
}

export default App
