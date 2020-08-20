import React from 'react';
import ReactDom from 'react-dom';
import Flix from './App';
import './index.css';
import Sdata from './serviceWorker';





ReactDom.render(
  <> 
     <h1> HOTSTAR TOP - 5 </h1>

    {/* {Sdata.map(function newSdata(cValue){ */}
    {Sdata.map((cValue) =>{
  return (
    <Flix 
    key ={cValue.id}
    imgSrc={cValue.imgSrc}
    imgName={cValue.imgName}
    imgLink={cValue.imgLink}
   />
      )
   })
 }

  </>,
  document.getElementById('root')

);