import { useState } from 'react'

function App() {
  const [color, setColor] = useState("")

  return (
    <div className={`w-screen h-screen flex justify-center items-center bg-${color}-600`}>
      <div className='flex gap-3'>
        <button onClick={() => setColor("red")} className='px-4 py-2 border-white bg-red-600 text-white'>Red</button>

        <button onClick={() => setColor("blue")} className='px-4 py-2 border-white bg-blue-600 text-white'>Blue</button>

        <button onClick={() => setColor("green")} className='px-4 py-2 border-white bg-green-600 text-white'>Green</button>
      </div>
    </div>
  )
}

export default App
