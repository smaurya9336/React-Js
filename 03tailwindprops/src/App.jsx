import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"sarita",
    age:21
  }
  

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>

        <Card username="Sarita" btnText="click me"/>
        <Card username="Sarita Maurya" btnText="visit me"/>

    </>
  )
}

export default App
