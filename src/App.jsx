import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavbarComponent from './Navbar';
import PizzaComponent from './Pizza';
import FooterComponent from './Footer';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavbarComponent />
      <PizzaComponent />
      <FooterComponent />
    </div>
  )
}

export default App
