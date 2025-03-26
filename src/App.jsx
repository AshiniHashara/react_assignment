

import{ BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import Challenges from './pages/Challenges/Challenges'
import EditChallenge from './pages/EditChallenge/EditChallenge'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/challenges' element={<Challenges/>}/>
        <Route path='/editchallenge' element={<EditChallenge/>}/>
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
