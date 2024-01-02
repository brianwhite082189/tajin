import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data.js';






function App() {
  
  const cards = data.map((item) => {
    return  <Card 
             key = {item.id}
             item= {item}
              />

  })

  return (
    <>
      <Navbar />
      <Hero />
      <div className='wrapper'>
      {cards}
      </div>
      
        
    </>
  )
}

export default App
