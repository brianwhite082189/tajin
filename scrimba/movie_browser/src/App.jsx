import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.css'

function App() {
 return(
  <div>
    <Navbar />
    <Hero />
    <p>page is connected</p>
  </div>
 )
}

export default App
