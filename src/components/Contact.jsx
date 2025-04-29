import React from 'react';
import style from './Contact.css';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <>
      <div className='contact-form'>
        <div className='first'>
          <div className='heading' style={{marginTop:86}}>
            <h1 style={{fontSize:'40px'}}>STILL HAVE ➡️ <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>DOUBTS?</h1>
          </div>
          <div className='mid'>
            <h4 style={{fontSize:'50px', fontFamily:'bold'}}>CONTACT US</h4>
          </div>
          <div className='end'>
            <h4 style={{fontSize:'50px'}}>➡️</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
