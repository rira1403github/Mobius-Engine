import React from 'react';
import logo from './resImgo.jpeg'
import styled  from 'styled-components';
import img from './resImgt.jpeg';
import style from './Our_pillars.css';

function Our_Pillars() {
  return (
    <>
     <Wrap className='contain'>
      <div className='head'>
        <h1 style={{fontSize:'30px'}}>Resume Building & Coaching</h1><br /><br /><br /><br /><br /><br />
        <p style={{fontSize:'17px'}}>Let's talk about where you are headed-and how your resume can get you there</p><br /><br /><br />
        <p style={{fontSize:'20px'}}>Schedule a call to get started.</p>
      </div>
      <div className='boxes'>
        <div className='box' id="box-1">
          <div className='para-head'>
            <h1>Resume Rebuild</h1>
            <p style={{fontSize:'20px'}}>Crafted for senior to VP-level professionals</p>
            <p style={{fontSize:'20px'}}>ready for their next step</p>
          </div>
          <div className='para-head'>
            <h1>$1000 <span style={{fontSize:'25px'}}>one time</span></h1>
          </div>
          <div style={{ height: '1px', backgroundColor: 'black', width: '90%', marginTop: '10px', marginBottom: '10px', marginLeft:'20px'}}></div>
          <p className='para'>
            <li>3x30-min coaching</li>
            <li>Focused on story telling, not just formatting</li>
            <li>Analyst + full application team on Pacific</li>
            <li>Tailored to your target industry, company or role</li>
            <li>Direct work with our co-founder (ex-Google, JP Morgan)</li>
            <li>Executive coaching from UC Berkeley with 10+ years experience</li>
            <li>Resume Rebuild portfolio available upon request</li>
          </p>
          <button className="btn" id="dash-btn" >
            Get Started →
          </button>
        </div>
        <div className='box' id="box-2">
          <div className='para-head'>
            <h1>Interview Prep</h1>
            <p style={{fontSize:'20px'}}>Two sessions to sharpen your Story, confidence,</p>
            <p style={{fontSize:'20px'}}>and clarity - fast</p>
          </div>
          <div className='para-head'>
            <h1>$500 <span style={{fontSize:'25px'}}>one time</span></h1>
          </div>
          <div style={{ height: '1px', backgroundColor: 'black', width: '90%', marginTop: '10px', marginBottom: '10px', marginLeft:'20px'}}></div>
          <p className='para'>
            <li>2x45-min live coaching with our co-founder</li>
            <li>Real-time, practical feedback</li>
            <li>Build clarity, empathy & execution presence</li>
            <li>For seniors and leadership roles-technical & non-technical</li>
          </p>
          <button className="btn" id="dash-btn" style={{marginTop:'6.5rem'}} >
            Get Started →
          </button>
        </div>
      </div>
     </Wrap>
    </>
  )
}

const Wrap = styled.div`
 margin-top:9rem;
 margin-left:2rem;
 height:90vh;
 width:80%;
`;

export default Our_Pillars;
