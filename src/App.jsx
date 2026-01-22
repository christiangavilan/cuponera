import { Route, Routes } from 'react-router-dom'
import './App.css'
import Contadores from './pages/Contadores'
import Cuponera from './pages/Cuponera'
import Calendario from './pages/Calendario'
import NavBar from './components/NavBar'

function App() {
  

  return (
    <>
      
        <NavBar/>

        <Routes>

          {/* Calendario de adviento */}
          <Route
            path='/calendario'
            element= {<Calendario/>}
          >
          </Route>
          
          {/* cuponera */}
          <Route
            path='/cuponera'
            element= {<Cuponera/>}
          >
          </Route>
          
          {/* Contador */}
          <Route
            path='/contadores'
            element= {<Contadores/>}
          >
          </Route>
        </Routes>
      
    </>
  )
}

export default App
