import './App.css';
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { HomeComponents } from './components/home/HomeComponents'


const App=() =>{
  return (
    <div className='bg-dark'>
      <Navbar/>
      <div>
        <Routes>
          <Route path='/' element={<HomeComponents/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App;
