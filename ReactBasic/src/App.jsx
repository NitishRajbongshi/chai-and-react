import { useState } from 'react'
import './index.css'

function App() {

  let [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  }

  const decreaseCounter = () => {
    setCounter(counter - 1);
  }

  const reset = () => {
    setCounter(0);
  }

  return (
    <>
      <div className="container mx-auto">
        <div className='flex justify-center items-center h-screen'>
          <div className='p-3 flex flex-col w-96 h-auto bg-white border-2'>
            <div className='my-5 text-center'>
              <p className='text-8xl font-bold'>{counter}</p>
            </div>
            <div className='flex justify-center items-center'>
              <div className='mx-2'><button onClick={decreaseCounter} className='py-2 text-xl text-red-900 bg-red-200 px-5'><i className='fa fa-minus'></i></button></div>
              <div className='mx-2'><button onClick={reset} className='py-2 text-xl text-green-900 bg-green-200 px-5'><i className="fa fa-refresh" aria-hidden="true"></i></button></div>
              <div className='mx-2'><button onClick={increaseCounter} className='py-2 text-xl text-blue-900 bg-blue-200 px-5'><i className='fa fa-plus'></i></button></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
