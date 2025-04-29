import React from 'react';
import style from './Intro.css';
import { Link } from 'react-router-dom';

function Intro() {
  return (
    <>
      <div className='Intro-contain'>
        <div className='intro-head'>
          <h1 style={{fontSize:30}}>How we work?</h1>
        </div>
        <div className='intro-main'>
          <div className='point' style={{fontSize:20}}>
          <div className="rounded-box"><span style={{fontSize:30}}>1</span></div>
          <div style={{ height: '2px', backgroundColor: 'black', width: '180px', marginTop: '10px', marginBottom: '10px'}}></div>
            Submit intake Form <br/>
          </div><br />
          <div className='point' style={{fontSize:20}}>
          <div className="rounded-box"><span style={{fontSize:30}}>2</span></div>
          <div style={{ height: '2px', backgroundColor: 'black', width: '190px', marginTop: '10px', marginBottom: '10px'}}></div>
            We do the search and 
            <br />{" "} curation for list of jobs<br/>
          </div><br />
          <div className='point' style={{fontSize:20}}>

          <div className="rounded-box"><span style={{fontSize:30}}>3</span></div>
          <div style={{ height: '2px', backgroundColor: 'black', width: '190px', marginTop: '10px', marginBottom: '10px'}}></div>
            You approve, we do the
            <br />{" "} tedious part (applying) <br/>
          </div><br />
          <div className='point' style={{fontSize:20}}>
          <div className="rounded-box"><span style={{fontSize:30}}>4</span></div>
          <div style={{ height: '2px', backgroundColor: 'black', width: '180px', marginTop: '10px', marginBottom: '10px'}}></div>
            You get the interview <br/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Intro
