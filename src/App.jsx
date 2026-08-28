import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/Card.jsx'
import Header from './components/Header.jsx'
import UseFetch from './hooks/UseFetch.js'
import Footer from './components/Footer.jsx'

function App() {


  return (
    <>
      <Header />
      <h1 className='text-3xl font-bold underline'>Hello</h1>
      <p className='text-green-500'>hello world</p>
      <Card />
      <Footer />
    </>
  )
}

export default App
