import './App.css';
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomeComponents from './components/home/HomeComponents';
import FormNoticias from './components/forms/FormNoticias';
import FormProgramacionSabado from './components/forms/FormProgramacionSabado';
import FormProgramacionDomingo from './components/forms/FormProgramacionDomingo';
import FormProgramacionFemenina from './components/forms/FormProgramacionFemenina';
import FormCaptacionJugadores from './components/forms/FormCaptacionJugadores';
import NoticiaCompleta from './components/home/NoticiaCompleta';


const App=() =>{
  return (
    <div className='bg-dark'>
      <Navbar/>
      <div>
        <Routes>
          <Route path='/' element={<HomeComponents/>}/>
          <Route path='/carga-de-noticias' element={<FormNoticias/>}/>
          <Route path='/programacion-sabado' element={<FormProgramacionSabado/>}/>
          <Route path='/programacion-domingo' element={<FormProgramacionDomingo/>}/>
          <Route path='/programacion-femenina' element={<FormProgramacionFemenina/>}/>
          <Route path='/captacion-jugadores' element={<FormCaptacionJugadores/>}/>
          <Route path='/noticia-completa' element={<NoticiaCompleta/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App;
