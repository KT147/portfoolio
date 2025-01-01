import { Route, Routes } from 'react-router-dom';
import './App.css'
import "./index.css"
import Work from "./pages/Work"
import Hobbies from "./pages/Hobbies"
import Courses from "./pages/Courses"
import Navbar from './components/Navbar';



function App() {

  return (
    <>
      <div>
      <a className='facebook-button' href="https://www.facebook.com/">
        <img src="/facebook.png"/>
        <span>Jälgi mind Facebookis</span>
      </a> </div>
        <img className='main-picture' src="https://static.vecteezy.com/system/resources/thumbnails/049/722/783/small_2x/beautiful-model-in-a-stylized-background-with-copy-space-photo.jpg"/>
        <br></br>
        <div className='tekst-1'><b>Tere, see olen mina Lucia Carbonara Bolognese Italiano Maseratti. Jah, see sama, Lucia. Siin on mõned loomad, kes mulle meeldivad. Vaadake järele:</b></div>

      
      

      <Routes>
        <Route path="" element= { <Navbar/>} />
        <Route path="work" element= { <Work/>} />
        <Route path="hobbies" element= { <Hobbies/>} />
        <Route path="courses" element= { <Courses/>} />
      </Routes>

    </>
  )
}

export default App
