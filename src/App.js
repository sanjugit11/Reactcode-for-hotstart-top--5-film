import React from 'react';
import Images from './setupTests';

function Flix(props) {
  // console.log(props);
 return(
  <div className="cards">
  <div className="card">
     <Images imgrc ={props.imgSrc}/>
    {/* <img src={props.imgSrc} className="card-img" ></img> */}
  <div className="card_info">
    <p>the HOTSTAR original</p>
    <h3> {props.imgName} </h3>

      <a href={props.imgLink} target="_blank">
          <button >click me</button>
       </a>
  
    </div>
</div>
</div>
 )

}

export default Flix;