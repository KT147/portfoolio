import { Link } from "react-router-dom"
import '../App.css'
import "../index.css"


function Navbar() {
  return (
<div className='navigation-pictures'>
        <Link className='main-link' to="work">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Lion_%28165938297%29.jpeg"/>
        <div className='tekst-2'>Töö</div>
        </Link>
        <Link className='main-link' to="hobbies">
        <img src="https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg"/>
        <div className='tekst-2'>Hobid</div>
        </Link>
        <Link className='main-link' to="courses">
        <img src="https://media.newyorker.com/photos/62c4511e47222e61f46c2daa/4:3/w_2663,h_1997,c_limit/shouts-animals-watch-baby-hemingway.jpg"/>
        <div className='tekst-2'>Kursused</div>
        </Link>
      </div>
  )
}
    



export default Navbar