import React from 'react'
import { Link } from 'react-router-dom'

const Resources = () => {

    return(
      <div className='containerStyle fade-in'>
        <h1>Piano Learning Resources</h1>
        <ul className='nav-bar'>
        <li >
          <Link className='nav-customlink border border-2' to="../scaletable" >Scale Chart</Link>
        </li>
          </ul>
        <hr style={{color: 'black', fontSize: "5px"}}></hr>
        <h2>Sheet Music and Method Books</h2>
        <ul>
          <li><a href="https://imslp.org/" target="_blank">IMSLP (International Music Score Library Project)</a> - IMSLP offers a vast collection of free public domain sheet music, including classical compositions from renowned composers.</li>
          <li><a href="https://pianoadventures.com" target="_blank">Faber and Faber</a> - Faber and Faber provides a range of piano method books and educational resources suitable for pianists of all levels.</li>
          <li><a href="https://www.sheetmusicplus.com/" target="_blank">Sheet Music Plus</a> - Sheet Music Plus offers a wide selection of sheet music for various genres and skill levels, along with digital downloads.</li>
          <li><a href="https://www.pianostreet.com/" target="_blank">Piano Street</a> - Piano Street provides a wealth of sheet music, educational materials, and a supportive community for pianists.</li>
        </ul>

        <h2>Music Learning and Practice Apps</h2>
        <ul>
          <li><a href="https://www.musictheory.net/" target="_blank">MusicTheory.net</a> - MusicTheory.net offers free lessons and interactive exercises to improve your music theory knowledge and skills.</li>
          <li><a href="https://irealpro.com/" target="_blank">iReal Pro</a> - iReal Pro is an app for creating and practicing with customizable backing tracks in various styles and genres.</li>
        </ul>

        <h2>Online Piano Communities and Forums</h2>
        <ul>
          <li><a href="https://www.pianoworld.com/" target="_blank">Piano World Forums</a> - Piano World is a vibrant online community for piano enthusiasts to discuss various topics, share experiences, and seek advice.</li>
          <li><a href="https://www.pianostreet.com/smf/" target="_blank">Piano Street Forum</a> - The Piano Street Forum is a place for pianists to connect, exchange ideas, and discuss all things related to the piano.</li>
        </ul>
        
        <div>
        </div>
      </div>
    )
}

export default Resources