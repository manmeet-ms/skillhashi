import React from 'react'
import './assets/style.css'

import Footer from './components/Footer'
import Home from './components/Home'
import Signup from './components/Signup'
// import Login from './components/Login'

const App = () => {
  return (
    <div className='pt-24' >
      <Home />
      {/* <Login /> */}
      <Signup />
      <Footer />
    </div>
  )
}

export default App