
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Navbar from './Components/Navbar'
import { Routes,Route, useNavigate } from 'react-router-dom'
import GetAllData from './Components/GetAllData'
import PostRecord from './Components/PostRecord'
import EditUpdate from './Components/EditUpdate'


function App() {
  
  return (
    <>
    <Navbar/>

      <div className=' mt-3 container-fluid'>
        <div className='row'>
          <Routes>
            <Route path='/' element={<GetAllData/>}/>
            <Route path='/postrecord' element={<PostRecord/>}/>
            <Route path='/edit/:mobile' element={<EditUpdate/>}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
