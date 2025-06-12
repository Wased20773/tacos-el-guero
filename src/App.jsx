import { useState } from 'react'
import './styles/App.css'
import HomePage from '../src/pages/homepage.jsx'
import Menu from '../src/pages/menu.jsx'
import Footer from '../src/miscellaneous/Footer.jsx'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='app-container'>
        <HomePage />
        <Menu />
        <Footer />
      </div>
    </>
  )
}

export default App
