import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  
  return (
    <div className="App">
      <Navbar />
     
    <h1>Movie Library</h1>
    <Outlet />
    </div>
      
  )
}

export default App
