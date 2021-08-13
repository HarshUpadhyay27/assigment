import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Part1 from "./components/Part1";

const App = () => {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>
      <Part1/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default App
