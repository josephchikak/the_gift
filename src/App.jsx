import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import Scene from './Scene'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        <main className='w-[100vw] h-[100vh]'>
          <div className='z-10 absolute w-1/4 h-1/4 '>
              <a href="https://africori.to/thegift" target='_blank'  >
                  {/* <p>CLick me</p> */}
                  <div className=" relative text-xs sm:text-[24px] after:content-['Click_to_save'] after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2 after:mt-2  after:text-black after:px-2 after:py-1 after:rounded after:w-full">
                    <img src="assets/1.png" alt=" cover art" />

                  </div>
                 
                
              </a>
          </div>
          <Canvas>
             <Scene/>
          </Canvas>
           
        </main>

    </>
  )
}

export default App
