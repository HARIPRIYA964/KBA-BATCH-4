import { useState } from 'react'
import Logos from './Logos'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [liked,setLike] = useState(false)
  const [darkmode,setDarkMode] = useState(false)

  return (
    <>
     <Logos />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <button onClick={()=> setLike((like)=> (!like) )}>
          {liked ? 'liked':'dislike'}
          
        </button>
        <button onClick={()=>setDarkMode((darkmode)=>(!darkmode))}>
         
        </button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
