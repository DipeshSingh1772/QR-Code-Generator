import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <div className='App'>
      <Navbar/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default App
