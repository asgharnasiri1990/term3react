import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component from './Component'

function App() {
  return (
    <div className='card-container '>
      <Component
        title="account"
        price="59000"
        image="person1.webp"
      />

      <Component
        title="account"
        price="88000"
        image="person2.webp"
      />

      <Component
        title="account"
        price="24000"
        image="person3.webp"
      />

      <Component
        title="Name: account"
        price="12000"
        image="person4.webp"
      />
<Component />
    </div>
  )
}

export default App
