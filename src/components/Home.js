import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaPinterest} from 'react-icons/fa'
import {FaUser} from 'react-icons/fa'
import {BsCalendar} from 'react-icons/bs'
import {BsChatSquare} from 'react-icons/bs'
import { Link } from 'react-router-dom'



function Home() {

 
  return (
    <div className='Home-wrapper'>
    <div className='Home'>
      <div className='Home-content'>
        <h1>Welcome<br/><span>to Home page</span></h1>
        <div className='line'>

        </div>
        <p>Lorem,ipsum dolor sit amet consectetur adipisicing elit.
        </p>
       </div>
    </div>
    <div className='about'>
        <div className='flex'>
            <div className='left'>
                <h4>Lorem ipsum dolor sit amet<br/>
                 consectetur adipisicing elit.<br/>
                 Deserunt perspiciatis ex<br/>ipsam
                </h4>
            </div>
            <div className='right'>
                <h3>About us</h3>
                <div className='line1'></div>
                <p>lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
                 consectetur adipisicing elit.
                 Deserunt <br/> <span><i> perspiciatis ex ipsam Lorem ipsum dolor sit amet<br/>
                 consectetur adipisicing elit.
                 Deseruntperspiciatis ex ipsamLorem ipsum dolor sit amet<br/>
                 consectetur adipisicing elit.
                 Deserunt perspiciatis ex <br/>ipsamLorem ipsum dolor sit amet
                 consectetur adipisicing elit.
                 Deserunt perspiciatie exipsam</i></span></p>
                 <Link to='/contact'><button className='btn'>LET'S WORK TOGETHER</button></Link>
                
            </div>
        </div>
        <div className='icons'>
          <h3>WANT TO KNOW MORE ABOUT US?</h3>
          <div className='icons-i'>
          <div className='i'><FaFacebook size='25px' cursor='pointer' margin-right='10px'/></div>
          <div className='i'><FaInstagramSquare size='25px' cursor='pointer' margin-right='10px'/></div>
          <div className='i'><FaPinterest size='25px' cursor='pointer' margin-right='10px'/></div>
          
          </div>
          

        </div>
    </div>
    <div className='cards'>
      <img src='./images/architecture-1857175_1920.jpg' height='350px' width='528'></img>
      <img src='./images/castle-1998435_1920.jpg' height='350px' width='528'></img>
      <img src='./images/staircase-274614_1920.jpg' height='350px' width='527'></img>
    </div>
    <div className='posts'>
      <h3>RECENT POSTS</h3>
      <div className='line2'></div>
      <h5>Lorem ipsum olor sit amet consetetur adipisicing elit. Deserunt perspiciatie ex ipsam similidue blanditis. Culpa hic guia, repellendus corrupti</h5>
    
    <div className='coments'>
      <div className='vertical-line'></div>
      <div className='real-comments'>
        <div className='user'>
          <FaUser size='12px'  color='#333'/>
         <p>POSTED BY SOMEONE</p>
         <BsCalendar size='12px' color='#333'/>
         <p>30 07 2021</p>
         </div>
         <div className='other'>
          <h4>LOREM IPSUM DOLORS SIT AMET CONSECTETUR ADIPISICING ELIT.</h4>
          <p>Lorem ipsum dolor st amet consectetur adipisicing elit. Deserunt perspiciatie ex ipsam similidue 
            blanditis. Culpa hic quia, repellendus corrupti perspiciatie praeentium<br/> necessitatibus alias illo quidem. Repudianae expedta ilum aspernatur magni?
          </p>
          <div className='com'><BsChatSquare size='12px'/> <p>20 comments</p></div>
          </div>

         </div>
      </div>
      <div className='coments'>
      <div className='vertical-line'></div>
      <div className='real-comments'>
        <div className='user'>
          <FaUser size='12px'  color='#333'/>
         <p>POSTED BY SOMEONE</p>
         <BsCalendar size='12px' color='#333'/>
         <p>30 07 2021</p>
         </div>
         <div className='other'>
          <h4>LOREM IPSUM DOLORS SIT AMET CONSECTETUR ADIPISICING ELIT.</h4>
          <p>Lorem ipsum dolor st amet consectetur adipisicing elit. Deserunt perspiciatie ex ipsam similidue 
            blanditis. Culpa hic quia, repellendus corrupti perspiciatie praeentium<br/> necessitatibus alias illo quidem. Repudianae expedta ilum aspernatur magni?
          </p>
          <div className='com'><BsChatSquare size='12px'/> <p>20 comments</p></div>
          </div>

         </div>
      </div>
      <div className='coments'>
      <div className='vertical-line'></div>
      <div className='real-comments'>
        <div className='user'>
          <FaUser size='12px'  color='#333'/>
         <p>POSTED BY SOMEONE</p>
         <BsCalendar size='12px' color='#333'/>
         <p>30 07 2021</p>
         </div>
         <div className='other'>
          <h4>LOREM IPSUM DOLORS SIT AMET CONSECTETUR ADIPISICING ELIT.</h4>
          <p>Lorem ipsum dolor st amet consectetur adipisicing elit. Deserunt perspiciatie ex ipsam similidue 
            blanditis. Culpa hic quia, repellendus corrupti perspiciatie praeentium<br/> necessitatibus alias illo quidem. Repudianae expedta ilum aspernatur magni?
          </p>
          <div className='last'>
          <div className='com'><BsChatSquare size='12px'/> <p>20 comments</p></div>
          
          <Link to='/blog'><button className='btn2'>VIEW ALL POSTS</button></Link></div>
          
          </div>

         </div>
        
      </div>
       
    </div>
    
    <div className='subcribe'>
      <h3>SUBCRIBE & DON'T MISS OUT</h3>
      <p>Lorem ipsum dolor st amet consectetur adipisicing elit. Deserunt perspiciatie ex ipsam similidue 
            blanditis. Culpa hic quia, repellendus corrupti perspiciatie praeentium</p>
            <div className='form'>
              <input type='email' placeholder='ENTER YOUR EMAIL' className='box'></input>
              <button className='send'>SUBSRIBE</button>
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

export default Home