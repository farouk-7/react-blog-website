import React from 'react'
import { FaSearch} from 'react-icons/fa'
import {FaUser} from 'react-icons/fa'
import {BsCalendar} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaPinterest} from 'react-icons/fa'


function About() {
  return (
    <div className='About'>
      <div className='container'>
        <div className='first'>
          <div className='flex-item'>
            <h3>HI THERE, LET'S INTRODUCE YOU TO THE TEAM...</h3>
            <div className='line3'></div>
            <p>Lorem ipsum dolor st amet consectetur adipisicing elit. Deserunt perspiciatie ex ipsam similidue 
            blanditis. Culpa hic quia repellendus corrupti perspiciatie praeentium<br/> necessitatibus alias illo quidem. Repudianae expedta ilum aspernatur magni</p>
             <img src='/images/meeting-2284501_1920.jpg' height='450' width='600px'></img>
          </div>
          <div className='side1'>
            <div className='search'>
            <input type='text' placeholder='SEARCH' className='box1'></input>
            <div className='searx'><FaSearch size='12px'/></div>
            </div>
            <h3>RECENT POSTS</h3>
            <div className='coments'>
      <div className='vertical-line1'></div>
      <div className='real-comments'>
        <div className='user'>
          <FaUser size='12px'  color='#333'/>
         <p>POSTED BY SOMEONE</p>
         <BsCalendar size='12px' color='#333'/>
         <p>30 07 2021</p>
         </div>
         <div className='other'>
          <h4>LOREM IPSUM DOLORS SIT AMET< br/> CONSECTETUR ADIPISICING ELIT.</h4>
          <p>Lorem ipsum dolor st amet consectetur adipisicing elit. Deserunt perspiciatie ex ipsam similidue 
            blanditis. Culpa hic quia, 
          </p>
          </div>
         </div>
         </div>
      <div className='coments'>
      <div className='vertical-line1'></div>
      <div className='real-comments'>
        <div className='user'>
          <FaUser size='12px'  color='#333'/>
         <p>POSTED BY SOMEONE</p>
         <BsCalendar size='12px' color='#333'/>
         <p>30 07 2021</p>
         </div>
         <div className='other'>
          <h4>LOREM IPSUM DOLORS SIT AMET<br/> CONSECTETUR ADIPISICING ELIT.</h4>
          <p>Lorem ipsum dolor st amet consectetur adipisicing elit. Deserunt perspiciatie ex ipsam similidue 
            blanditis. Culpa hic quia, 
          </p>
          </div>
          </div>
      </div>


      <div className='coments'>
      <div className='vertical-line1'></div>
      <div className='real-comments'>
        <div className='user'>
          <FaUser size='12px'  color='#333'/>
         <p>POSTED BY SOMEONE</p>
         <BsCalendar size='12px' color='#333'/>
         <p>30 07 2021</p>
         </div>
         <div className='other'>
          <h4>LOREM IPSUM DOLORS SIT AMET<br/>CONSECTETUR ADIPISICING ELIT.</h4>
          <p>Lorem ipsum dolor st amet consectetur adipisicing elit. Deserunt perspiciatie ex ipsam similidue 
            blanditis. Culpa hic quia,
          </p>
          </div>
          </div>
      </div>
      </div>
        </div>
      <div className='second'>
          <div className='second1'>
            <h3>LOREM IPSUM DOLOR SIT AMET.</h3>
            <p>Lorem ipsum dolor st amet consectetur adipisicing elit. Deserunt perspiciatie ex ipsam similidue 
            blanditis. Culpa hic quia repellendus corrupti perspiciatie praeentium necessitatibus alias illo quidem. Repudianae expedta ilum aspernatur magni</p>
            <h4>LOREM IPSUM DOLOR SIT AMET CONSECTETUR:</h4>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
            </ul>
            <p>Lorem ipsum dolor st amet consectetur adipisicing elit. Deserunt perspiciatie ex ipsam similidue 
            blanditis. Culpa hic quia repellendus corrupti perspiciatie praeentium necessitatibus alias illo quidem. Repudianae expedta ilum aspernatur magni Lorem ipsum dolor st amet consectetur adipisicing elit. Deserunt perspiciatie ex ipsam similidue 
            blanditis. Culpa hic quia repellendus corrupti perspiciatie praeentium necessitatibus alias illo quidem. Repudianae expedta ilum aspernatur magni Lorem ipsum dolor st amet consectetur adipisicing elit. Deserunt perspiciatie ex ipsam similidue 
            blanditis. Culpa hic quia repellendus corrupti perspiciatie praeentium necessitatibus alias illo quidem. Repudianae expedta ilum aspernatur magni
            </p>
            <div className='blckbox'>
              <div className='number'>
                <h1>300</h1>
                <h6>SATISFIED CLIENTS</h6>
              </div>
              <div className='number'>
                <h1>20</h1>
                <h6>AWARDS</h6>
              </div>
              <div className='number'>
                <h1>400</h1>
                <h6>COMPLETED PROJECTS</h6>
              </div>
            </div>
            <p>Lorem ipsum dolor st amet consectetur adipisicing elit. Deserunt perspiciatie ex ipsam similidue 
            blanditis. Culpa hic quia repellendus corrupti perspiciatie praeentium necessitatibus alias illo quidem. Repudianae expedta ilum aspernatur magni Lorem ipsum dolor st amet consectetur adipisicing elit. Deserunt perspiciatie ex ipsam similidue 
            blanditis. Culpa hic quia repellendus corrupti perspiciatie praeentium necessitatibus alias illo quidem. Repudianae expedta ilum aspernatur magni Lorem ipsum dolor st amet consectetur adipisicing elit. </p>

          </div>


          <div className='posters'>
            <h2>READ MOST POPULAR ARTICLE</h2>
            <div className='p1'>
              {/* <img src='images/architecture-1857175_1920.jpg' height='300px' width='400px'></img> */}
              <h3> LOREM, IPSUM DOLOR SIT AMET<br/>CONSECTETUR</h3>
              <div className='line4'></div>
              <button className='butt'>READ ARTICLE</button>
            </div>
            <div className='p2'>
              <h3> LOREM, IPSUM DOLOR SIT AMET<br/>CONSECTETUR</h3>
              <div className='line4'></div>
              <button className='butt'>READ ARTICLE</button>
            </div>
            <div className='p3'>
              <h3> LOREM, IPSUM DOLOR SIT AMET<br/>CONSECTETUR</h3>
              <div className='line4'></div>
              <button className='butt'>READ ARTICLE</button>
            </div>
        
          </div>
      </div>
        </div>
        <div className='footer'>
      <div className='socials'>
      <div className='o'><FaFacebook size='25px' cursor='pointer' margin-right='10px'/></div>
      <div className='o'><FaInstagramSquare size='25px' cursor='pointer' margin-right='10px'/></div>
        <div className='o'><FaPinterest size='25px' cursor='pointer' margin-right='10px'/></div>
      </div>
       <p> 2022 YOUR-DOMAIN | CREATED BY FAROUK</p>
     </div>
    </div>
  )
}

export default About