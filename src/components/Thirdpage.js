import React from 'react';
import './Thirdpage.css'; 
import logo from './Logo.jpeg'; 
import linkedinIcon from './linkedinIcon.png'; 

function Thirdpage() {
  return (
    <thirdpage className="thirdpage">
      <div className="thirdpage-left">
        <img src={logo} alt="MobiusEngine" className="logo" />
      </div>

      <div className="thirdpage-center">
        <div className="thirdpage-info">
          <h4>Address</h4>
          <p>1815 Mission St Ste 103 #450<br />San Francisco, CA 94103</p>
        </div>
        <div className="thirdpage-info">
          <h4>Email</h4>
          <p><a href="mailto:finance@mobiusengine.ai">finance@mobiusengine.ai</a></p>
        </div>
        <div className="thirdpage-info">
          <h4>Telephone</h4>
          <p><a href="tel:6508896026">650-889-6026</a></p>
        </div>
      </div>

      <div className="thirdpage-right">
        <a href="#"><img src={linkedinIcon} alt="LinkedIn" className="social-icon" /></a>
        <a href="#"><img src={linkedinIcon} alt="LinkedIn" className="social-icon" /></a>
      </div>
    </thirdpage>
  );
}

export default Thirdpage;