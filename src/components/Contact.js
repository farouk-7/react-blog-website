import React from 'react'
import { FaSearch} from 'react-icons/fa'
import {FaUser} from 'react-icons/fa'
import {BsCalendar} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaPinterest} from 'react-icons/fa'



function Contact() {
    const handleClick=()=>{
      document.querySelector(".button6").innerHTML="SENT"
    }
  return (
    <div className='contact'>
      <div className='contact-container'>
      <div className='lefthand'>
        <h3>PLEASE LET US KNOW IF YOU HAVE ANY QUESTIONS</h3>
        <div className='line5'></div>
        <p>Lorem ipsum dolor st amet consectetur adipisicing elit.Deserunt perspiciatie ex ipsam similidue 
            blanditis. Culpa hic quia,</p>
          <div className='form2'>
            <input type='name' placeholder='FIRSTNAME' className='namebox'></input>
            <input type='name' placeholder='LASTNAME' className='namebox'></input>
            <input type='name' placeholder='OTHERNAME' className='namebox'></input>


            <input type='email' placeholder='EMAIL ADDRESS' className='emailbox'></input>
            <input type='text' placeholder='LEAVE A MESSAGE' className='messagebox'></input>
            <button className='button6'onClick={handleClick}>SEND MESSAGE</button>

          </div>

      </div>


    <div className='righthand'>
       <div className='search'>
            <input type='text' placeholder='SEARCH' className='box1'></input>
            <div className='searx'><FaSearch size='12px'/></div>
        </div>
        <h3>RECENTS POSTS</h3>
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
          <h4>LOREM IPSUM DOLORS SIT AMET<br/> CONSECTETUR ADIPISICING ELIT.</h4>
          <p>Lorem ipsum dolor st amet consectetur adipisicing elit. Deserunt perspiciatie ex ipsam similidue 
            blanditis. Culpa hic quia, 
          </p>
          </div>
          </div>
      </div>
      <div className='posters'>
            <h2>READ MOST POPULAR ARTICLE</h2>
            <div className='p1'>
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

export default Contact