import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen'>
      <h1 className='text-red-500 text-center text-6xl m-5'>CRM-ERP project</h1>
    </div>
  )
}

export default App
