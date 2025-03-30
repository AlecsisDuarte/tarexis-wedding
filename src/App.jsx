import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Tarexis Weddingsite</h1>
      <div className="card">
        <p>
          Come and experience Love, Joy and Happiness with us on our special day!
        </p>
      </div>
      <p className="wip-text">
        Work in progress. Pardon our dust!
      </p>
    </>
  )
}

export default App
