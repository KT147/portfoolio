import { Link, Route, Routes } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <>
      <div>
      <a className='facebook-button' href="https://www.facebook.com/">
        <img src="/facebook.png"/>
        <span>Jälgi mind Facebookis</span>
      </a>
        <img className='main-picture' src="https://static.vecteezy.com/system/resources/thumbnails/049/722/783/small_2x/beautiful-model-in-a-stylized-background-with-copy-space-photo.jpg"/>
        <br></br>
        <div className='tekst-1'><b>Tere, see olen mina Lucia Carbonara Bolognese Italiano Maseratti. Jah, see sama, Lucia. Siin on mõned loomad, kes mulle meeldivad. Vaadake järele:</b></div>
        <div className='rectangle'></div>

      </div>

      <div className='navigation-pictures'>
        <Link className='main-link' to="work">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Lion_%28165938297%29.jpeg"/>
        <div className='tekst-2'>Lõvid on suured kiisud</div>
        </Link>
        <Link className='main-link' to="hobbies">
        <img src="https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg"/>
        <div className='tekst-2'>Oi, kui nunnud nemad on. Kes need üldse on?</div>
        </Link>
        <Link className='main-link' to="courses">
        <img src="https://media.newyorker.com/photos/62c4511e47222e61f46c2daa/4:3/w_2663,h_1997,c_limit/shouts-animals-watch-baby-hemingway.jpg"/>
        <div className='tekst-2'>Papagoid elavad soojal maal, seda ma tean. Ehk siis mitte Eestis. Vist?</div>
        </Link>
      </div>
      
      <br></br>

      <div className='laulutekst'><b>Ja siin on mu lemmiklaul. Kas teile ka meeldib? Kui jah, siis lisa mind Facebookis sõbraks ja laigi mu fotosid.</b></div>

      <br></br>

      <iframe className='video' width="560" height="315" src="https://www.youtube.com/embed/QxIWDmmqZzY?si=bvwn8LeNgByzNeKU" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <Routes>
        <Route path="work" element= { <div>Work</div>} />
        <Route path="hobbies" element= { <div>Hobbies</div>} />
        <Route path="courses" element= { <div>Courses</div>} />
      </Routes>

    </>
  )
}

export default App
