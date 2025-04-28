import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [Password, setPassword] = useState("")

  const passRef = useRef(null)

  const PasswordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (number) str += "0123456789"
    if (character) str += "!@$#%^&*()-+_="

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, number, character, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passRef.current?.select()
    window.navigator.clipboard.writeText(Password)
  }, [Password])

  useEffect(() => {
    PasswordGenerator()
  }, [length, number, character, PasswordGenerator])

  return (
    <>
      <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-6 py-8 my-8 text-orange-700 bg-gray-900'>
        <h1 className='text-white text-center my-3 text-3xl mb-6'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4 ml-22 mr-22'>
          <input
            type="text"
            value={Password}
            className='outline-none w-full py-2 px-3  bg-white text-black'
            placeholder='password'
            readOnly
            ref={passRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className='outline-blue bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-800'
          >
            Copy
          </button>
        </div>

        <div className='flex text-sm gap-x-12 flex-wrap justify-center mb-10 text-orange-700'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={8}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label className='text-white '>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={number}
              id='numberInput'
              onChange={() => { setNumber((prev) => !prev) }}
            />
            <label htmlFor="numberInput" className='text-white'>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={character}
              id='characterInput'
              onChange={() => { setCharacter((prev) => !prev) }}
            />
            <label htmlFor="characterInput" className='text-white'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
