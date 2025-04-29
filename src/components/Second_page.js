import React from 'react';
import styled from "styled-components";
import style from "./Second_page.css";
import logo from './Logo.jpeg'; 

function Second_page() {
  return (
    <>
     <Div className="container">
  
      <Wrap className='square-2'>
      </Wrap>
     </Div>
    </>
  )
}

const Div = styled.div`
 margin-bottom:0px;
 color:black;
 height:100vh;
 width:100%;
 background:#f9e5ff;
 display:flex;
 flex-direction:row;
`;

const Wrap = styled.div`
 display:flex;
 flex:0 50%;
 max-width:50%;
 background: #fff0ff;
 background-size:35rem;
 background-position:center;
 background-repeat:no-repeat;
 background-image: url(${logo});
`;
export default Second_page
