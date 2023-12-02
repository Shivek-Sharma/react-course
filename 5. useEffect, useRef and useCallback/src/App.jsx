import { useCallback, useState, useEffect, useRef } from 'react'

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  // useRef lets you reference a value that’s not needed for rendering
  const passwordRef = useRef(null);

  // useCallback lets you cache a function definition between re-renders (basically it is used for optimization)
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmopqrstuvwxyz";

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*+/=:<>?"

    for (let i = 1; i <= length; i++) {
      let char = str[Math.floor(Math.random() * str.length)];
      pass += char;
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword])

  // no need to use 'useCallback' here, as this function is only performing some basic tasks
  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);

    // selecting/highlighting the copied password to give better user experience
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 5);
  }

  // re-renders the application whenever any of the dependencies changes and perform the tasks defined inside
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed])

  return (
    <div className='w-screen h-screen bg-slate-700 flex justify-center items-center'>
      <div className='w-2/3 h-1/2 bg-gray-800 text-orange-500 p-5 rounded-md flex flex-col justify-center items-center'>
        <h1 className='text-white text-xl text-center mb-10'>Password Generator</h1>

        <div className='w-4/5 flex flex-col justify-center items-center'>
          <div className='flex gap-x-2 w-full justify-center'>
            <input type='text' value={password} readOnly
              className='bg-white text-gray-600 p-2 rounded-xl w-2/3'
              ref={passwordRef} />

            <button className='outline-none bg-blue-700 rounded-xl text-white px-3 py-2'
              onClick={copyPassword} >
              Copy</button>
          </div>

          <div className='flex mt-5 gap-x-5'>
            <div className='flex items-center gap-x-1'>
              <input type='range' value={length} min={6} max={20}
                className='cursor-pointer'
                onChange={(e) => setLength(e.target.value)} />
              <label>Length: {length}</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input type='checkbox' checked={numberAllowed} className='cursor-pointer'
                onChange={() => setNumberAllowed((prev) => !prev)} />
              <label>Numbers</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input type='checkbox' checked={charAllowed} className='cursor-pointer'
                onChange={() => setCharAllowed((prev) => !prev)} />
              <label>Characters</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
