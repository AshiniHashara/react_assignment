

import{ BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import Challenges from './pages/Challenges/Challenges'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/challenges' element={<Challenges/>}/>
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
