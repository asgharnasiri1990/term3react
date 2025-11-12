import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './Products'

function App() {
  return (
    <div className='card-container '>
      <Products
        title="account"
        price="59000"
        image="person1.webp"
      />

      <Products
        title="account"
        price="88000"
        image="person2.webp"
      />

      <Products
        title="account"
        price="24000"
        image="person3.webp"
      />

      <Products
        title="Name: account"
        price="12000"
        image="person4.webp"
      />
<Products />
    </div>
  )
}

export default App
